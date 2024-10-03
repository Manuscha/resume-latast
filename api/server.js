(async () => {
  const argv = require('yargs').argv
  const CONF = require('./config')
  await CONF.initialize()
  const log = require('./utils/log')
  const exitHook = require('async-exit-hook')
  const express = require('express')
  const path = require('path')
  const apm = require('elastic-apm-node')
  const _ = require('lodash')
  const cluster = require('cluster')
  const os = require('os')
  const https = require('https')
  const HttpsWorker = require('node-web-worker')
  const fs = require('fs')
  const compression = require('compression')

  if (CONF.APM) {
    apm.addTransactionFilter(function (transaction) {
      if (transaction.type === 'request' && _.has(transaction, 'context.request')) {
        const req = transaction.context.request
        if (/^\/api\//gmi.test(req.url.pathname) && !/:/gim.test(transaction.name)) {
          transaction.name = `${req.method} ${req.url.pathname}`
        }

        if (/^\/data\//gmi.test(req.url.pathname)) {
          transaction.name = `${req.method} static file`
        }
      }
      return transaction
    })
    apm.start({
      ..._.get(CONF, 'apm', {}),
      serverUrl: CONF.apmServer,
      captureBodyedit: 'all',
      ignoreUrls: ['/healthcheck']
    })
  }

  const app = await require('./index')(null, '/api')
  app.use('/app', express.static('app', {
    index: ['index.html', 'index.htm']
  }))

  app.use('/healthcheck', (req, res, next) => {
    res.status(200).end()
  })

  app.use('/static', express.static(path.resolve(__dirname, './static')))
  app.use('/', compression(), express.static(path.resolve(__dirname, './dist')))
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './dist/index.html'));
  });

  app.all('/openapi.yaml', async (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'openapi.yaml'), {
      root: __dirname
    })
  })


  app.use('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, './dist/index.html'));
  })

  if (argv.test) {
    const supertest = require('supertest')
    await supertest.agent(app)
    process.exit(0)
  } else {
    new HttpsWorker(app)
      .productionWorker()
      .listen(CONF.PORT, () => {
        if (cluster.isMaster)
          console.log(`Server listening on http://localhost:${CONF.PORT}`)
      })
  }


  exitHook(done => {
    log.info('httpServer stop')
    process.nextTick(() => {
      done()
    })
  })
})().catch(e => {
  console.error(e)
  process.exit(1)
})
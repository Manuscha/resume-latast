const express = require('express')
const consola = require('consola')
const cors = require('cors')
const HttpsWorker = require('node-web-worker')
const _ = require('lodash')

const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
config.env.CI_COMMIT_REF_NAME = process.env.CI_COMMIT_REF_NAME || (config.dev && 'dev')

async function start() {
  // Init Nuxt.js
  let apiPort = await require('portfinder')
    .getPortPromise({
      port: 8080
    });

  _.set(config, 'proxy./api', `http://127.0.0.1:${apiPort}`)

  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server


  // Build only in dev mode
  if (config.dev) {
    const shelljs = require('shelljs')
    shelljs.exec(`cd ../api && yarn dev --port ${apiPort}`, {
      async: true
    })

    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(cors())
  app.use(nuxt.render)

  new HttpsWorker(app)
    .https()
    .listen(443, () => {
      consola.ready({
        message: `Server listening on https://localhost:443`,
        badge: true
      })
    })
}
start()

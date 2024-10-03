const path = require('path')
const shelljs = require("shelljs")
const fs = require('fs')
const pkg = require('./package.json')

let CONF = {
  NODE_ENV: 'devlopment',
  // ROOT_PASSWORD: '$2y$12$8laEKBl4sDMVxPXQdLE6g.WEjqLMPWt6LxMFfMEHyLosYktIJLZY6',
  SYS: {},
  PORT: 80,
  TWO_FACTOR_AUTHENTICATION: {
    ENABLED: true,
    COUNTER: 180 // seconds
  },
  RECAPTCHA: {
    SITE_KEY: null,
    SECRET_KEY: null
  },
  DB_NAME: 'test_warin',
  DB_USER: 'gwadmin',
  DB_PASS: 'dHfu123!',
  DB_HOST: '172.30.108.14',
  DB_DIALECT: 'mysql',
  DB_DIRECTORY: false,
  VERIFY_EMAIL: true,
  DB_PORT: '3306',
  FORGOT_PASSWORD_EXPIRE: 180,
  SESSION_SECRET: 'changeme',
  // @see https://www.npmjs.com/package/cors
  CORS: {
    ORIGIN: false,
  },
}


if (process.env.NODE_ENV != 'production' && fs.existsSync(path.resolve(__dirname, './config.dev.js'))) {
  CONF = Object.assign(CONF, require(path.resolve(__dirname, './config.dev.js')))
} else if (fs.existsSync(path.resolve(__dirname, './config.prod.js'))) {
  CONF = Object.assign(CONF, require(path.resolve(__dirname, './config.prod.js')))
}

CONF = require('config')(CONF)
  .env()
  .js()
  .argv()
  .exec()

console.log(CONF);
module.exports = CONF

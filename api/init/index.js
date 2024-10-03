const CONF = require('../config')
const log = require('../utils/log')
const _ = require('lodash')
const argv = require('yargs').argv
const fs = require('fs');
const path = require('path')
const debug = require('debug')('init')

let p

module.exports = function (force = argv.forceInit, data = true) {

}

if (process.argv[1] == __filename) {
    module.exports(argv[0])
        .then(() => process.exit(0))
        .catch(e => {
            console.error(e)
            process.exit(1)
        })
}
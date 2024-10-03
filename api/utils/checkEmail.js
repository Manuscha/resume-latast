const conf = require('../config')
const verifier = require('email-verify')

if (conf.nodeEnv == 'test') {
  module.exports = jest.fn(() => true)
} else {
  module.exports = async function (email) {
    return new Promise((resolve, reject) => {
      verifier.verify(email, function (err, result) {
        return resolve({ error: err || false, result })
      })
    })
  }
}


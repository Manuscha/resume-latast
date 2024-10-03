const axios = require('axios')
const CONF = require('../config')
const ResponseError = require('./ResponseError')

module.exports = async function (req) {
  if (!CONF.RECAPTCHA.SECRET_KEY) return true

  const url = `https://www.google.com/recaptcha/api/siteverify`;

  if (!req.body.recaptcha_token)
    throw new ResponseError('Require recaptcha_token')

  let r = await axios.post(url, {
    secret: CONF.RECAPTCHA.SECRET_KEY,
    response: req.body.token
  })
    .catch(error => {
      throw new ResponseError('Invalid recaptchaToken')
    });
}
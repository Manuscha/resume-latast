const express = require('express')
const { userInfo } = require('os')
const router = express.Router({ mergeParams: true })
const ResponseError = require('../utils/ResponseError')
const User = require('../utils/mongo').get('users')

router.get('/', async function (req, res, next) {
  try {
    let username = req.res.username
    let password = req.res.password
    

    res.send('OK')
  } catch (e) {
    next(e)
  }
})
router.post('/', async function (req, res, next) {
  try {
    User.insert({ name: 'wsertyu' })
    res.send('OK')
  } catch (e) {
    next(e)
  }
})

module.exports = router

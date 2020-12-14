var express = require('express')
var router = express.Router()

const middleware = require('../config/middleware')

const auth = require('../app/controllers/auth/authController')

router.post('/login', auth.login)
router.get('/user', middleware.chain('jwt'), auth.getUser)

module.exports = router
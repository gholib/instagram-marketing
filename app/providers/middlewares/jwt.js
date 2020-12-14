const jwt = require('jsonwebtoken')
const jwtConfig = require('../../../config/jwt')
const auth = require('../auth/auth')

exports.verify = function(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) {
        return res.status(401).send('Unauthorized')
    }

    jwt.verify(token, jwtConfig.key, (err, user) => {
        if (err) {
            return res.status(401).send('Unauthorized')
        }
        auth.setUser(user)
        
        next()
    })
}
const verifyJwt = require('../app/providers/middlewares/jwt')

 const routeMiddleware = {
     jwt:verifyJwt.verify
 }

exports.chain = function(middleware) {
    return routeMiddleware[middleware]
}
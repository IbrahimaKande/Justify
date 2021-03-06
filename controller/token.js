let jwt = require('jsonwebtoken')
let config = require('../config')

exports.verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']
    if (!token){
        return res.status(403).send({ auth: false, message: 'No token provided.' })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
        }
    })

    next()
}
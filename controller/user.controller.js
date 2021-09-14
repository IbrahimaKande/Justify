const db = require("../model/index")
const User = db.users
let jwt = require('jsonwebtoken')
let config = require("../config")

exports.create = (req, res) => {
    if(!req.body.firstName|
        !req.body.lastName|
        !req.body.email){
        res.status(400).send({
            message: "Empty fields!"
        })
        return
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }

    User.findOne({ where: {email: req.body.email} }).then(function(result){
        if(result === null){
            User.create(user)
            .then(data => {
                res.send("success");
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error"
                })
            })
        }
        else {
            console.log("email already used");
            res.send("email already used");
        }
    })
}

exports.find = (req, res) => {
    const user = User.findOne({ where: {email: req.body.email}})
    .then(user => {
        if(user === null){
            console.log("email not found")
            res.status(401)
            res.send("email not found")
        }
        else{
            console.log("connected")
            token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            })
            res.status(200).send({ auth: true, token: token })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error connectiong user"
        })
    })
    .finally(() =>{
        return true
    })
}
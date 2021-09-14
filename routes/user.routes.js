const users = require("../controller/user.controller")
let router = require("express").Router()

router.post("/register", users.create)
router.post("/login", users.find)

module.exports = router
const users = require("../controller/user.controller")
let router = require("express").Router()
const token = require("../controller/token")

router.post("/register", users.create)
router.post("/login", users.find)
router.post("/justify", token.verifyToken, users.justify)

module.exports = router
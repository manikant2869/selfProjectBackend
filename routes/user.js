const express = require("express");
const router = express.Router()
const user = require("../controllers/user")

router.route("/signup").post( user.add )
router.route("/login").post(user.login)

module.exports = router
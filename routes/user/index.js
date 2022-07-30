const express = require("express")

// Controller functions
const { signUpUser, loginUser } = require("../../controllers/user/")
const router = express.Router()

// Log-in route
router.post("/login", loginUser)

// Sign-up route
router.post("/signup", signUpUser)

module.exports = router

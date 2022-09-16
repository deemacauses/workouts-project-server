const express = require("express")

// Controller functions
const { signUpUser, logInUser } = require("../../controllers/user/")
const router = express.Router()

// Log-in route
router.post("/login", logInUser)

// Sign-up route
router.post("/signup", signUpUser)

module.exports = router

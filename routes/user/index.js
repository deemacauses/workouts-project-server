const express = require("express")

// Controller functions
const { signUpUser, logInUser } = require("../../controllers/user/")
const router = express.Router()

// Log-in route
router.post("/log-in", logInUser)

// Sign-up route
router.post("/sign-up", signUpUser)

module.exports = router

const User = require("../../models/user/")

// Log-in user
const loginUser = async (request, response) => {
  response.json({ message: "Login user" })
}

// Sign-up user
const signUpUser = async (request, response) => {
  response.json({ message: "Sign up user" })
}

module.exports = { loginUser, signUpUser }

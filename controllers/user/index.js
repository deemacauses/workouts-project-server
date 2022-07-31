const User = require("../../models/user/")

// Log-in user
const loginUser = async (request, response) => {
  response.json({ message: "Login user" })
}

// Sign-up user
const signUpUser = async (request, response) => {
  try {
    const { email, password } = request.body
    const user = await User.signUp(email, password)
    response.status(200).json({ email, user })
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
}

module.exports = { loginUser, signUpUser }

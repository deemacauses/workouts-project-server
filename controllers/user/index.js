const User = require("../../models/user/")
const jwt = require("jsonwebtoken")

const createToken = _id => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}

// Log-in user
const loginUser = async (request, response) => {
  response.json({ message: "Login user" })
}

// Sign-up user
const signUpUser = async (request, response) => {
  try {
    const { email, password } = request.body
    const user = await User.signUp(email, password)
    // Create a token
    const token = createToken(user._id)
    response.status(200).json({ email, token })
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
}

module.exports = { loginUser, signUpUser }

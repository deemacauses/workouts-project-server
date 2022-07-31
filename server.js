require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

// Set up express application
const app = express()

// Set up middleware
app.use(express.json())

app.get("/", (request, response, next) => {
  response.redirect("/api/workouts")
  next()
})

app.use((request, response, next) => {
  console.log(request.path, request.method)
  next()
})

// Set up routes
app.use("/api/workouts", routes.workout)
app.use("/api/user", routes.user)

// Set up database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      const message = "Connected to database and listening on port"
      console.log(message, process.env.PORT)
    })
  })
  .catch(error => console.log(error))

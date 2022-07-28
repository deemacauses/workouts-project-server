const mongoose = require("mongoose")
const models = require("../../models")

// Get all workouts
const getWorkouts = async (request, response) => {
  const workouts = await models.workout.find({}).sort({ createdAt: -1 })
  response.status(200).json(workouts)
}

// Get a single workout
const getWorkout = async (request, response) => {
  const { id } = request.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return response.status(404).json({ error: "No such workout" })
  const workout = await models.workout.findById(id)
  if (!workout) response.status(404).json({ error: "No such workout" })
  response.status(200).json(workout)
}

// Create a new workout
const createWorkout = async (request, response) => {
  const { title, load, reps } = request.body
  let emptyFields = []
  if (!title) emptyFields.push("title")
  if (!load) emptyFields.push("load")
  if (!reps) emptyFields.push("reps")
  if (emptyFields.length > 0)
    return response
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields })

  try {
    const workout = await models.workout.create({ title, load, reps })
    response.status(200).json(workout)
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
}

// Update a workout
const updateWorkout = async (request, response) => {
  const { id } = request.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return response.status(404).json({ error: "No such workout" })
  const params = [{ _id: id }, { ...request.body }]
  const workout = await models.workout.findOneAndUpdate(...params)
  if (!workout) response.status(400).json({ error: "No such workout" })
  response.status(200).json(workout)
}

// Delete a workout
const deleteWorkout = async (request, response) => {
  const { id } = request.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return response.status(404).json({ error: "No such workout" })
  const workout = await models.workout.findOneAndDelete({ _id: id })
  if (!workout) response.status(400).json({ error: "No such workout" })
  response.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
}

const express = require("express")
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
} = require("../../controllers/workout")

const router = express.Router()

router.get("/", getWorkouts) // GET all workouts
router.get("/:id", getWorkout) // GET a single workout
router.post("/", createWorkout) // POST a new workout
router.patch("/:id", updateWorkout) // UPDATE a workout
router.delete("/:id", deleteWorkout) // DELETE a workout

module.exports = router

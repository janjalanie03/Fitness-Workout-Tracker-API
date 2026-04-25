let workouts = [];
let progressLogs = [];

let workoutIdCounter = 1;
let logIdCounter = 1;

module.exports = {
  workouts,
  progressLogs,
  getNextWorkoutId: () => workoutIdCounter++,
  getNextLogId: () => logIdCounter++
};
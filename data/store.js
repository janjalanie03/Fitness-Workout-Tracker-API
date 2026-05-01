let workouts = [
  {
    id: 1,
    name: "Morning Run",
    type: "Cardio",
    duration: 30,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Upper Body Strength",
    type: "Strength",
    duration: 45,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Yoga Session",
    type: "Flexibility",
    duration: 60,
    createdAt: new Date().toISOString()
  }
];

let progressLogs = [
  {
    id: 1,
    workoutId: 1,
    date: "2026-04-28",
    calories: 250,
    notes: "Felt energized",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    workoutId: 2,
    date: "2026-04-29",
    calories: 400,
    notes: "Challenging but good",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    workoutId: 3,
    date: "2026-04-29",
    calories: 180,
    notes: "Relaxing session",
    createdAt: new Date().toISOString()
  }
];

// Update counters so they don’t duplicate IDs
let workoutIdCounter = 4;
let logIdCounter = 4;

module.exports = {
  workouts,
  progressLogs,
  getNextWorkoutId: () => workoutIdCounter++,
  getNextLogId: () => logIdCounter++
};
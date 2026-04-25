
const express = require('express');
const router = express.Router();
const store = require('../data/store');

const findWorkoutById = (id) => store.workouts.find(w => w.id === id);

// GET ALL
router.get('/', (req, res) => {
  res.json(store.workouts);
});

// GET ONE
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

  const workout = findWorkoutById(id);

  if (!workout) return res.status(404).json({ message: 'Workout not found' });

  res.json({ message: 'Workout retrieved successfully', workout });
});

// CREATE
router.post('/', (req, res) => {
  const { name, type, duration } = req.body;

  if (!name || !type || !duration) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (typeof duration !== 'number' || duration <= 0) {
    return res.status(400).json({ message: 'Duration must be a positive number' });
  }

  const newWorkout = {
    id: store.getNextWorkoutId(),
    name,
    type,
    duration,
    createdAt: new Date().toISOString()
  };

  store.workouts.push(newWorkout);

  res.status(201).json({ message: 'Workout added successfully', workout: newWorkout });
});


// UPDATE
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });
  
    const workout = findWorkoutById(id);
  
    if (!workout) return res.status(404).json({ message: 'Workout not found' });
  
    const { name, type, duration } = req.body;
  
    if (duration && (typeof duration !== 'number' || duration <= 0)) {
      return res.status(400).json({ message: 'Duration must be a positive number' });
    }
  
    workout.name = name || workout.name;
    workout.type = type || workout.type;
    workout.duration = duration || workout.duration;
  
    res.json({ message: 'Workout updated successfully', workout });
  });
  
  // DELETE
  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });
  
    const workout = findWorkoutById(id);
  
    if (!workout) return res.status(404).json({ message: 'Workout not found' });
  
    store.workouts = store.workouts.filter(w => w.id !== id);
    store.progressLogs = store.progressLogs.filter(log => log.workoutId !== id);
  
    res.json({ message: 'Workout deleted successfully' });
  });
  
  module.exports = router;
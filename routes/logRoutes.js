
const express = require('express');
const router2 = express.Router();
const store2 = require('../data/store');

const findWorkout = (id) => store2.workouts.find(w => w.id === id);

// GET ALL LOGS
router2.get('/', (req, res) => {
  res.json(store2.progressLogs);
});

// CREATE LOG
router2.post('/', (req, res) => {
  const { workoutId, date, calories, notes } = req.body;

  if (!workoutId || !date || calories === undefined) {
    return res.status(400).json({ message: 'workoutId, date, and calories are required' });
  }

  if (typeof calories !== 'number' || calories < 0) {
    return res.status(400).json({ message: 'Calories must be a non-negative number' });
  }

  const workoutExists = findWorkout(workoutId);

  if (!workoutExists) {
    return res.status(404).json({ message: 'Workout does not exist' });
  }

  const newLog = {
    id: store2.getNextLogId(),
    workoutId,
    date,
    calories,
    notes: notes || '',
    createdAt: new Date().toISOString()
  };

  store2.progressLogs.push(newLog);

  res.status(201).json({ message: 'Progress logged successfully', log: newLog });
});

module.exports = router2;

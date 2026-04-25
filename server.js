const express = require('express');
const cors = require('cors');

const workoutRoutes = require('./routes/workoutRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Fitness Workout Tracker API is running 🚀');
});

app.use('/api/workouts', workoutRoutes);
app.use('/api/logs', logRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

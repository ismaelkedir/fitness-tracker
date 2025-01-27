import mongoose from 'mongoose';

// Define Workout Schema
const workoutSchema = new mongoose.Schema({
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    caloriesBurned: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
});

// Define Workout Model
const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
import { Request, Response } from 'express';
import Workout from '../database/models/workout';

// Get all workouts
export const getAllWorkouts = async (req: Request, res: Response) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch workouts' });
    }
};

// Get one specific workout
export const getOneWorkout = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const workout = await Workout.findById(id);

        if (!workout) {
            res.status(404).json({ error: 'Workout not found' });
            return; 
        }

        res.json(workout);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch workout' });
    }
}

// Create a new workout
export const createWorkout = (req: Request, res: Response) => {
    res.send('Create a new workout');
};

// Update a workout
export const updateWorkout = (req: Request, res: Response) => {
    res.send(`Update workout with ID ${req.params.id}`);
};

// Delete a workout
export const deleteWorkout = (req: Request, res: Response) => {
    res.send(`Delete workout with ID ${req.params.id}`);
};
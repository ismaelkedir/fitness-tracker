import express from 'express';
import workoutRoutes from './routes/workouts';
import { logger } from './middlewares/logger';
import { errorHandler, notFoundHandler } from './middlewares/error';
import {Request, Response} from "express";

const app = express();

// Built-in Middleware to parse JSON
app.use(express.json());

app.get('/hello', (req:Request, res: Response)=>{
    res.send({message: "Hellooooo World!!!!!!"})
})

// Routes
app.use('/mongo-workouts', workoutRoutes);

// Custom middwares
app.use(logger)
app.use(errorHandler)
app.use(notFoundHandler)


export default app;
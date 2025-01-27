import { Router } from 'express';
import { 
    getAllWorkouts, 
    createWorkout, 
    updateWorkout, 
    deleteWorkout, 
    getOneWorkout
} from '../controllers/workoutController';

const router = Router();

// Define routes
router.get('/', getAllWorkouts);
router.get('/:id', getOneWorkout)
router.post('/', createWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;
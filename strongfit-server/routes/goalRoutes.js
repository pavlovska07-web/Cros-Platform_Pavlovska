import express from 'express';
import { getGoals, getGoalById, createGoal, updateGoal, deleteGoal } from '../controllers/goalController.js';
import { validateGoal } from '../middleware/validateGoal.js';

const router = express.Router();

router.get('/', getGoals);
router.get('/:id', getGoalById);

router.post('/', validateGoal, createGoal);
router.put('/:id', validateGoal, updateGoal);

router.delete('/:id', deleteGoal);

export default router;
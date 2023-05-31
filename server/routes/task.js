import express from 'express';

const router = express.Router();

import { getTasks, createTask, updateTask, deleteTask } from '../controllers/task.js';


router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);



export default router;
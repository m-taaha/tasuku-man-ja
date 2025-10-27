import express from 'express'
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { createTask, getAllTasks } from '../controllers/task.controller.js';


const taskRouter = express.Router();

// protected route
taskRouter.post('/create',isAuthenticated, createTask)
taskRouter.get('/tasks',isAuthenticated, getAllTasks)

export default taskRouter;
import express from 'express'
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { createTask } from '../controllers/task.controller.js';


const taskRouter = express.Router();

// protected route
taskRouter.post('/create',isAuthenticated, createTask)

export default taskRouter;
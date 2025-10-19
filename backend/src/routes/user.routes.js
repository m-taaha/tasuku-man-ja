import express from 'express'
import { userLogin, userLogout, userRegister } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const userRouter = express.Router();


//public routes 
userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin);
userRouter.post('/logout', userLogout)

export default userRouter;
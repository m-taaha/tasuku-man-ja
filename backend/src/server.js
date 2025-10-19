import dotenv from 'dotenv';
import express from "express";
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
import userRouter from './routes/user.routes.js';
import taskRouter from './routes/task.routes.js';



dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // to parse json
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//routing
app.use('/api/v1/user', userRouter)
app.use('/api/v1/task', taskRouter )


app.listen(PORT, () => {
    console.log(`Server is running on: https://localhost:${PORT}`);
    connectDB();
})
import dotenv from 'dotenv';
import express from "express";
import cookieParser from "cookie-parser"
import cors from 'cors'
import connectDB from "./config/db.js"
import userRouter from './routes/user.routes.js';
import taskRouter from './routes/task.routes.js';




dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000;


// allowing credentials so the browser can send/recieve cookies
app.use(
    cors({
    origin: "http://localhost:5173",
    credentials: true
}));



app.use(express.json()); // to parse json
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//routing
app.use('/api/v1/user', userRouter)
app.use('/api/v1/task', taskRouter )


app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
    connectDB();
})
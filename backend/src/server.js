import dotenv from 'dotenv';
import express from "express";
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"


dotenv.config();


const app = express();
const PORT = 8000;

app.use(express.json()); // to parse json
app.use(express.urlencoded({exptended: true}));
app.use(cookieParser());


app.listen(PORT, () => {
    console.log(`Server is running on: https://localhost:${PORT}`);
    connectDB();
})
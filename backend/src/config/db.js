import mongoose from "mongoose";
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected sussefully");
    }  catch(error){
         console.error("MongoDB connection failed:", error.message);
    process.exit(1); // exit the app if DB not connected
    }
}

export default connectDB;
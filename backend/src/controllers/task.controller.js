import {Task} from "../models/task.model.js"


export const createTask = async (req, res) => {
    try{
        const {title, priority, dueDate, description} = req.body;

        if(!title) {
            return res.status(400).json({message: "Title is required"});
        }

        //create task and link it with logged in user
        const newTask = await Task.create({
            title,
            description,
            priority,
            dueDate,
           author: req.user._id //user come from auth-middleware
        })

        return res.status(201).json({
            message: `Task created`,
            task: newTask
        })

    }catch(error){
        console.log("Task Create Error:", error);
       return res.status(500).json({
            message: "Server Error"
        })
    }
}

export const getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find({ author: req.user._id}).sort({createdAt:-1});
        return res.status(200).json({tasks})
        
    }catch(error){
        console.log("Get all Tasks error", error);
        res.status(500).json({
          message: "Server Error"
        });
    }
}
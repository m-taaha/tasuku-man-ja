import { tr } from "zod/v4/locales";
import {Task} from "../models/task.model.js"

//create task
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

// getAllTasks
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

// getTaskById
export const getTaskById = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findOne({_id: id, author: req.user._id});

        if(!task){
            return res.status(404).json({
                message: "Task not found"
            })
        }
            return res.status(200).json({task})
            
    }catch(error){
        console.log("Get task by Id error:" , error);
        return res.status(500).json({
            message: "Server Error"
        })
    }
}

// updateTask
export const updateTask = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description, priority, dueDate, completed} = req.body;

        const task = await Task.findOne({_id: id, author: req.user._id});

        if(!task){
            return res.status(404).json({
                message: "Task not found",
            })
        }

        //update only if values are provided (to support partial updates)

        if(title) task.title = title;
        if(description) task.description = description;
        if(priority) task.priority = priority;
        if(dueDate) task.dueDate = dueDate;
        if (completed !== undefined) {
          task.completed = completed === true || completed === "true";
        }

       const updatedTask = await task.save();

        return res.status(200).json({
            message: "Task Updated Successfully",
            task: updatedTask,
        })

    }catch(error){
        console.log("Task update error", error)
        return res.status(500).json({
            message: "Server Error"
        })
    }
}


//delete task
export const deleteTask = async (req, res) => {
    try{
        const {id} = req.params;

        const task = await Task.findByIdAndDelete({_id: id, author: req.user._id});

        if(!task) {
            return res.status(404).json({
                message: "Task not Found"
            })
        }

        return res.status(200).json({
            message: "Task deleted successfully",
            deletedTask: id,
        })
    }catch(error){
        console.log("Task delete error", error);
        return res.status(500).json({
          message: "Server Error",
        });
    }
}
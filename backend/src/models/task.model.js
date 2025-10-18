import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        priority: {
            type: String,
            enum: ["high", "low", "medium"]
        },
        dueDate: {
            type: Date
        },
        description: {
            type: String,
            trim: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        completed: {
            type: Boolean,
            default: false,
        }
    },{timestamps: true})

    export const Task = mongoose.model("Task", taskSchema)
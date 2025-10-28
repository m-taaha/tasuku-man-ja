import React, { useState } from 'react'
import {
    Dialog, 
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle
} from '../components/ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { Input } from "@/components/ui/input";
import {Textarea} from '../components/ui/textarea'
import { toast } from 'sonner';
import { createTask } from '../utils/api/task.api';

function AddTaskDialog({onAdd}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");
    const [dueDate, setDueDate] = useState("");
    const [loading, setLoading] = useState(false);


    

        const handleAdd = async () => {
            if(!title.trim()){
                toast.error("Please enter a title");
                return;
            }

            try{
                const newTask = await createTask({title, description, priority, dueDate});
                onAdd(newTask); //backend returns task object
                toast.success("Task added successfully");
                setTitle("");
                setDescription("")
            }catch(error){
                toast.error("Failed to add task");
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className='flex items-center gap-2'>
                <Plus className='w-4 h-4' /> Add Task
            </Button>
        </DialogTrigger>


        <DialogContent className='bg-white rounded-xl'>
            <DialogHeader>
                <DialogTitle>
                    Add a New Task
                </DialogTitle>
            </DialogHeader>
            <div className='space-y-4 mt-4'>
                {/* title */}
                <Input
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                {/* description */}
                <Textarea 
                placeholder='Task description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

                <div>
                    <lable className="block text-sm font-medium mb-1">Priority</lable>
                    <select 
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className='w-full border rounded-md p-2'
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                {/* due date */}

                <div>
                    <label className='block text-sm font-medium mb-1'>Due Date</label>
                    <Input 
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>

                <Button 
                onClick={handleAdd}
                className='w-full'
                disabled={loading}
                >
               {   loading?  "Saving...": "Save Task"}
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AddTaskDialog
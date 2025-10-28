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

function AddTaskDialog({onAdd}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAdd = () => {
        const newTask = {_id: Date.now(), title, description}

        const handleAdd = async () => {
            if(!title.trim()){
                toast.error("Please enter a title");
                return;
            }

            try{
                const newTask = await createTask({title, description});
                onAdd(newTask.task); //backend returns task object
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
                <Input
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea 
                placeholder='Task description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

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
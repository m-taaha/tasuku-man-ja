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

function AddTaskDialog({onAdd}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAdd = () => {
        const newTask = {_id: Date.now(), title, description}

        onAdd(newTask);
        setTitle("");
        setDescription("")
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

                >
                    Save Task
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AddTaskDialog
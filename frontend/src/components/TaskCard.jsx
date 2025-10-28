import React, { useState } from 'react'
import {Card, CardHeader, CardTitle, CardContent} from '../components/ui/card';
import { Button } from './ui/button';
import { deleteTask } from '../utils/api/task.api';
import { toast } from 'sonner';

function TaskCard({task, onDelete}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try{
      setLoading(true);
      const res = await deleteTask(task._id);
      toast.success(res.message || "Task deleted successfully!");
      onDelete(task._id); //notify parent Dashboard
    }catch(error) {
      toast.error("Failed to delete task");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Card  className="border border-neutral-200 hover:shadow-md transition-all bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-neutral-800">
          {task.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-neutral-600 text-sm mb-4'>{task.description}</p>
        <div className='flex justify-between items-center'>
          <Button variant="outline">Edit</Button>
          <Button 
          onClick={handleDelete} 
          variant="destructive" 
          disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
            </Button>
        </div>
      </CardContent>

    </Card>
  )
}

export default TaskCard
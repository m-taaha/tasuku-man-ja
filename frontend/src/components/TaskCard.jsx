import React from 'react'
import {Card, CardHeader, CardTitle, CardContent} from '../components/ui/card';
import { Button } from './ui/button';

function TaskCard({task}) {
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
          <Button variant="destructive">Delete</Button>
        </div>
      </CardContent>

    </Card>
  )
}

export default TaskCard
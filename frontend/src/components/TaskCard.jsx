import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Button } from "./ui/button";
import { deleteTask, updateTask } from "../utils/api/task.api";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

function TaskCard({ task, onDelete, onEdit }) {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(task.completed);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      setLoading(true);
      const res = await deleteTask(task._id);
      toast.success(res.message || "Task deleted successfully!");
      onDelete(task._id);
    } catch (error) {
      toast.error("Failed to delete task");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (checked) => {
    try{
      setCompleted(checked);
      const res = await updateTask(task._id, {completed: checked});
      toast.success(
        checked ? "Task marked as completed!" : "Task marked as pending!"
      )
    }catch(error){
      console.log(error);
      toast.error("Failed to update task status");
      setCompleted(!checked); //rollback if there is an error
    }
  }

  return (
    <Card className="border border-neutral-200 hover:shadow-md transition-all bg-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle
            className={`text-lg font-semibold ${
              task.completed
                ? "line-through text-green-600"
                : "text-neutral-800"
            }`}
          >
            {task.title}
          </CardTitle>

          {/* Status badge  showing pending and complete*/}
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {completed ? "Completed" : "Pending"}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-neutral-600 text-sm mb-2">{task.description}</p>

        <p className="text-xs text-neutral-500 mb-4">
          <strong>Priority:</strong> {task.priority || "Not set"} <br />
          <strong>Due:</strong>{" "}
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No due date"}
        </p>

        {/* toggle , buttons */}
        <div className="flex justify-between items-center">

          <div className="flex gap-2">
            <Switch checked={completed} onCheckedChange={handleToggleComplete} />
            <span className="text-sm text-neutral-700">
              {completed ? "Done" : "Mark Done"}
            </span>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onEdit(task)}>
              Edit
            </Button>
            <Button
              onClick={handleDelete}
              variant="destructive"
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskCard;

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Button } from "./ui/button";
import { deleteTask } from "../utils/api/task.api";
import { toast } from "sonner";

function TaskCard({ task, onDelete, onEdit }) {
  const [loading, setLoading] = useState(false);

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

          {/*  status badge */}
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-neutral-600 text-sm mb-2">{task.description}</p>

        {/* Extra info */}
        <p className="text-xs text-neutral-500 mb-4">
          <strong>Priority:</strong> {task.priority || "Not set"} <br />
          <strong>Due:</strong>{" "}
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No due date"}
        </p>

        <div className="flex justify-between items-center">
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
      </CardContent>
    </Card>
  );
}

export default TaskCard;

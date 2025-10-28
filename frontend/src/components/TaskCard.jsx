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
import EditTaskDialog from "./EditTaskDialog";

function TaskCard({ task, onDelete, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

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
    <>
      <Card className="border border-neutral-200 hover:shadow-md transition-all bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-neutral-800">
            {task.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-neutral-600 text-sm mb-2">
            {task.description || "No description"}
          </p>
          <p className="text-xs font-medium text-neutral-700">
            Priority:{" "}
            <span
              className={`${
                task.priority === "high"
                  ? "text-red-500"
                  : task.priority === "medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {task.priority}
            </span>
          </p>
          <p className="text-xs text-neutral-500 mb-4">
            Due:{" "}
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "Not set"}
          </p>

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={() => setEditOpen(true)}>
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

      {/* Edit Dialog */}
      <EditTaskDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        task={task}
        onUpdate={onUpdate}
      />
    </>
  );
}

export default TaskCard;

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AddTaskDialog from "../components/AddTaskDialog";
import TaskCard from "../components/TaskCard";
import EditTaskDialog from "../components/EditTaskDialog";
import { getAllTasks } from "../utils/api/task.api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    // Get user info from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const fullName = `${parsedUser.firstName || ""} ${
        parsedUser.lastName || ""
      }`.trim();
      setDisplayName(fullName || parsedUser.name || "User");
    }

    // Fetch tasks
    const fetchTasks = async () => {
      try {
        const res = await getAllTasks();
        setTasks(res.tasks || []);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setIsEditOpen(true);
  };

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t._id === updatedTask._id ? updatedTask : t))
    );
  };

  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Workspace */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome Back, {displayName.split(" ")[0] || "User"}
          </h1>
          <AddTaskDialog onAdd={(newTask) => setTasks([...tasks, newTask])} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={(deletedId) =>
                setTasks(tasks.filter((t) => t._id !== deletedId))
              }
              onEdit={handleEditClick}
            />
          ))}

          {tasks.length === 0 && (
            <p className="text-neutral-500 mt-10 text-center">
              No tasks yet — click{" "}
              <span className="font-semibold">+ Add Task</span> to begin.
            </p>
          )}
        </div>
      </main>

      {/* Edit Task Modal */}
      <EditTaskDialog
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        task={selectedTask}
        onUpdate={handleTaskUpdate}
      />
    </div>
  );
}

export default Dashboard;

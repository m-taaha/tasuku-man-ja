import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import AddTaskDialog from '../components/AddTaskDialog'
import TaskCard from '../components/TaskCard'
import { Button } from '../components/ui/button'
import { User } from 'lucide-react'
import { getAllTasks } from '../utils/api/task.api'


function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [displayName, setDisplayName] = useState("")

  useEffect(() => {
    //fetching user info from localstorage to display name on dashboard
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const fullName = `${parsedUser.firstName || ""} ${
        parsedUser.lastName || ""
      }`.trim();
      
      setDisplayName(fullName || parsedUser.name || "User");
    }

    // todo fetch tasks from backend using axiosInstance
    const fetchTasks = async () => {
      try{
        const res = await getAllTasks();
        setTasks(res.tasks || [])
      }catch(error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks()
  }, []);
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      {/* sidbar */}
      <Sidebar />

      {/* workspace main  */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">

            {/* //todo have to make this one change based on first and last name of user - logged in  */}
            Welcome Back, {displayName.split(" ")[0] || "User"}
          </h1>
          <AddTaskDialog onAdd={(newTask) => setTasks([...tasks, newTask])} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => {
            <TaskCard key={task._id} task={task} />;
          })}

          {tasks.length === 0 && (
            <p className="text-neutral-500 mt-10 text-center">
              No tasks yet - click
              <span className="font-semibold">+ Add Task</span> to begin.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard
import React from 'react'
import { Button } from './ui/button'
import {ClipboardList, LogOut, PlusCircle} from 'lucide-react'
import { toast } from "sonner";
import { logoutUser } from "../utils/api/api";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();
  
    const handleLogout = async () => {
      try{
        const res = await logoutUser();
        toast.success(res.message || "Logged out Successfully")
        navigate("/auth");
      }catch(error){
        toast.error("Logout failed: Try again")
        console.log(error);
      }
    }

  return (
    <aside className="w-64 bg-white border-r border-neutral-200 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-8 text-neutral-800">
          Tasuku-Man-Ja
        </h2>

        <nav className="space-y-3">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <ClipboardList className="w-4 h-4" /> My Tasks
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-2">
            <PlusCircle className="w-4 h-4" />
            New Task
          </Button>
        </nav>
      </div>

      <Button
        onClick={handleLogout}
        variant="ghost"
        className="w-full justify-start gap-2 text-red-500 hover:text-red-600"
      >
        <LogOut className="w-4 h-4" /> Logout
      </Button>
    </aside>
  );
}

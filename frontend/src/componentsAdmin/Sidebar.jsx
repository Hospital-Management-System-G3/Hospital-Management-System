import React, { useState } from "react";
import {
  Activity,
  Heart,
  Calendar,
  Settings,
  ShieldCheck,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Bell,
} from "lucide-react";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <aside
      className={`w-${
        expanded ? "64" : "16"
      } bg-green-600 text-white p-4 flex flex-col space-y-8 transition-all duration-300`}
    >
      <div
        className={`text-2xl font-bold cursor-pointer  flex items-center justify-center w-full h-12 transition-all duration-300`}
        onClick={handleToggle}
      >
        {expanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </div>

      <nav className="flex flex-col items-stretch space-y-6">
        <button className="p-2 rounded-lg bg-green-500 hover:bg-green-400 transition-colors flex items-center w-full">
          <Activity size={20} />
          {expanded && <span className="ml-2">Activity</span>}
        </button>
        <button className="p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center w-full">
          <Heart size={20} />
          {expanded && <span className="ml-2">Heart</span>}
        </button>
        <button className="p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center w-full">
          <Calendar size={20} />
          {expanded && <span className="ml-2">Calendar</span>}
        </button>
        <button className="p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center w-full">
          <Settings size={20} />
          {expanded && <span className="ml-2">Settings</span>}
        </button>
        <button className="p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center w-full">
          <ShieldCheck size={20} />
          {expanded && <span className="ml-2">Security</span>}
        </button>
        <button className="p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center w-full">
          <Bell size={20} />
          {expanded && <span className="ml-2">Notifications</span>}
        </button>
      </nav>
      <button className="mt-auto p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center w-full">
        <LogOut size={20} />
        {expanded && <span className="ml-2">Logout</span>}
      </button>
    </aside>
  );
};

export default Sidebar;

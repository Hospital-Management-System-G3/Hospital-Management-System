import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Calendar,
  ClipboardList,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import AppointmentManagement from "../admin/AppointmentManagement";
import DashboardOverview from "../admin/DashboardOverview";
// import other components like PatientManagement, Billing, StaffManagement, Reports

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("DashboardOverview");
  const [hoveredMenu, setHoveredMenu] = useState(null);

  useEffect(() => {
    // Retrieve selected menu from localStorage on component mount
    const savedMenu = localStorage.getItem("selectedMenu");
    if (savedMenu) {
      setSelectedMenu(savedMenu);
    }
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    // Save the selected menu to localStorage
    localStorage.setItem("selectedMenu", menu);
  };

  const handleMenuHover = (menu) => {
    setHoveredMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "DashboardOverview":
        return <DashboardOverview />;
      case "User":
        return <PatientManagement />;
      case "Patient":
        return <Billing />;
      case "Staff":
        return <StaffManagement />;
      case "AppointmentManagement":
        return <AppointmentManagement />;
      case "Billing":
        return <Billing />;
      case "Reports":
        return <Reports />;
      case "Settings":
        return <Settings />;
      default:
        return <div>No Content Selected</div>;
    }
  };

  return (
    <div className="flex min-h-screen relative">
      <aside
        className={`w-${
          expanded ? "64" : "16"
        } bg-green-600 text-white p-4 flex flex-col space-y-8 transition-all duration-300 fixed top-0 left-0 h-screen`}
        style={{ zIndex: 1000 }} // Ensure it's on top of other content
      >
        <div
          className="text-2xl font-bold cursor-pointer flex items-center justify-center w-full h-12 transition-all duration-300"
          onClick={handleToggle}
        >
          {expanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </div>

        <nav className="flex flex-col items-stretch space-y-6">
          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "DashboardOverview"
                ? "bg-green-500"
                : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("DashboardOverview")}
            onMouseEnter={() => handleMenuHover("Dashboard Overview")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <LayoutDashboard size={20} />
            {expanded && <span className="ml-2">Dashboard Overview</span>}
            {!expanded && hoveredMenu === "Dashboard Overview" && (
              <span className="absolute ml-16 w-48 bg-green-500 p-2 rounded-lg">
                Dashboard Overview
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "User" ? "bg-green-500" : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("User")}
            onMouseEnter={() => handleMenuHover("User Management")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <Users size={20} />
            {expanded && <span className="ml-2">User Management</span>}
            {!expanded && hoveredMenu === "User Management" && (
              <span className="absolute ml-16 w-48 bg-green-500 p-2 rounded-lg">
                User Management
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "Patient" ? "bg-green-500" : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("Patient")}
            onMouseEnter={() => handleMenuHover("Patient Management")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <UserPlus size={20} />
            {expanded && <span className="ml-2">Patient Management</span>}
            {!expanded && hoveredMenu === "Patient Management" && (
              <span className="absolute ml-16 w-48 bg-green-500 p-2 rounded-lg">
                Patient Management
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "Staff" ? "bg-green-500" : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("Staff")}
            onMouseEnter={() => handleMenuHover("Staff Management")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <Users size={20} />
            {expanded && <span className="ml-2">Staff Management</span>}
            {!expanded && hoveredMenu === "Staff Management" && (
              <span className="absolute ml-16 w-48 bg-green-500 p-2 rounded-lg">
                Staff Management
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "AppointmentManagement"
                ? "bg-green-500"
                : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("AppointmentManagement")}
            onMouseEnter={() => handleMenuHover("Appointment Management")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <Calendar size={20} />
            {expanded && <span className="ml-2">Appointment Management</span>}
            {!expanded && hoveredMenu === "Appointment Management" && (
              <span className="absolute ml-16 w-48 bg-green-500 p-2 rounded-lg">
                Appointment Management
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "Billing" ? "bg-green-500" : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("Billing")}
            onMouseEnter={() => handleMenuHover("Billing and Payments")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <CreditCard size={20} />
            {expanded && <span className="ml-2">Billing and Payments</span>}
            {!expanded && hoveredMenu === "Billing and Payments" && (
              <span className="absolute ml-16 w-48 bg-green-500 p-2 rounded-lg">
                Billing and Payments
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "Reports" ? "bg-green-500" : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("Reports")}
            onMouseEnter={() => handleMenuHover("Reports")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <ClipboardList size={20} />
            {expanded && <span className="ml-2">Reports</span>}
            {!expanded && hoveredMenu === "Reports" && (
              <span className="absolute ml-16 bg-green-500 p-2 rounded-lg">
                Reports
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "Feedback"
                ? "bg-green-500"
                : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("Feedback")}
            onMouseEnter={() => handleMenuHover("Feedback")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <MessageSquare size={20} />
            {expanded && <span className="ml-2">Feedback</span>}
            {!expanded && hoveredMenu === "Feedback" && (
              <span className="absolute ml-16 bg-green-500 p-2 rounded-lg">
                Feedback
              </span>
            )}
          </button>

          <button
            className={`p-2 rounded-lg ${
              selectedMenu === "Settings"
                ? "bg-green-500"
                : "hover:bg-green-500"
            } transition-colors flex items-center w-full`}
            onClick={() => handleMenuSelect("Settings")}
            onMouseEnter={() => handleMenuHover("Settings")}
            onMouseLeave={() => handleMenuHover(null)}
          >
            <Settings size={20} />
            {expanded && <span className="ml-2">System Settings</span>}
            {!expanded && hoveredMenu === "Settings" && (
              <span className="absolute ml-16 w-32 bg-green-500 p-2 rounded-lg">
                System Settings
              </span>
            )}
          </button>
        </nav>

        <button className="mt-auto p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center w-full">
          <LogOut size={20} />
          {expanded && <span className="ml-2">Logout</span>}
        </button>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex items-center justify-center min-h-screen">
        {renderContent()}
      </main>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Sidebar from "../componentsAdmin/Sidebar";
import Header from "../componentsAdmin/Header";
import WelcomeCard from "../componentsAdmin/WelcomeCard";
import MetricCard from "../componentsAdmin/MetricCard";
import ProgressCard from "../componentsAdmin/ProgressCard";
import ActivityAnalytics from "../componentsAdmin/ActivityAnalytics";
import RightSidebar from "../componentsAdmin/RightSidebar";

// Import necessary icons from lucide-react
import { Heart, Thermometer, Activity, Coffee, Droplet } from "lucide-react";

const HealthDashboard = () => {
  const activityData = [
    { name: "Mon", steps: 7000, calories: 2100, distance: 5 },
    { name: "Tue", steps: 8000, calories: 2300, distance: 6 },
    { name: "Wed", steps: 9000, calories: 2500, distance: 7 },
    { name: "Thu", steps: 7500, calories: 2200, distance: 5.5 },
    { name: "Fri", steps: 8500, calories: 2400, distance: 6.5 },
    { name: "Sat", steps: 10000, calories: 2700, distance: 8 },
    { name: "Sun", steps: 6000, calories: 2000, distance: 4.5 },
  ];

  return (
    <div className="flex min-h-screen bg-green-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <WelcomeCard />
        <div className="grid grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={<Heart className="text-red-500" />}
            title="Heart rate"
            value="102"
            unit="bpm"
          />
          <MetricCard
            icon={<Thermometer className="text-orange-500" />}
            title="Temperature"
            value="36.6"
            unit="°C"
          />
          <MetricCard
            icon={<Activity className="text-blue-500" />}
            title="Blood pressure"
            value="120/80"
            unit="mmHg"
            bgColor="bg-green-600"
            textColor="text-white"
          />
          <MetricCard
            icon={<Coffee className="text-yellow-500" />}
            title="Glucose"
            value="80"
            unit="mg/dL"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <ProgressCard
            title="Water balance"
            icon={<Droplet className="text-blue-500" />}
            value={42}
            color="text-blue-500"
          />
          <ProgressCard
            title="General Health"
            icon={<Activity className="text-green-500" />}
            value={61}
            color="text-green-500"
          />
        </div>
        <ActivityAnalytics data={activityData} />
      </main>
      <RightSidebar />
    </div>
  );
};

export default HealthDashboard;

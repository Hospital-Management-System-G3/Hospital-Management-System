import React from "react";
import { Eye, Smartphone, Activity } from "lucide-react";
import IconButton from "./IconButton";
import Appointment from "./Appointment";

const RightSidebar = () => (
  <aside className="w-72 bg-green-700 text-white p-6">
    <div className="flex items-center space-x-4 mb-8">
      <img
        src="/api/placeholder/100/100"
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="font-semibold">Emma Shelton</h2>
        <p className="text-sm text-green-200">Patient</p>
      </div>
    </div>
    <div className="flex justify-between mb-8">
      <IconButton icon={<Eye />} label="82 kg" />
      <IconButton icon={<Smartphone />} label="175 cm" />
      <IconButton icon={<Activity />} label="26 y.o." />
    </div>
    <div className="mt-8 space-y-4">
      <Appointment
        icon="🦷"
        title="Dental"
        time="10:45 AM"
        doctor="Dr. Robert Miles"
      />
      <Appointment
        icon="👁️"
        title="Oculist"
        time="13:00 PM"
        doctor="Dr. Emma Wilson"
      />
      <Appointment
        icon="❤️"
        title="Cardiologist"
        time="15:00 PM"
        doctor="Dr. Jacob Jones"
      />
    </div>
  </aside>
);

export default RightSidebar;

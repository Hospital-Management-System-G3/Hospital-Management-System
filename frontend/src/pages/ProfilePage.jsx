import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User, Heart, Activity, Calendar, CreditCard, Plus } from 'lucide-react';

const PatientProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch health data
    const fetchHealthData = () => {
      const data = [
        { date: '2023-01', heartRate: 72, bloodPressure: 120, weight: 70 },
        { date: '2023-02', heartRate: 75, bloodPressure: 118, weight: 69 },
        { date: '2023-03', heartRate: 70, bloodPressure: 122, weight: 71 },
        { date: '2023-04', heartRate: 73, bloodPressure: 119, weight: 70 },
        { date: '2023-05', heartRate: 71, bloodPressure: 121, weight: 69 },
      ];
      setHealthData(data);
    };

    fetchHealthData();
  }, []);

  const patientData = {
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    bloodType: 'A+',
    height: '175 cm',
    weight: '70 kg',
  };

  const bills = [
    { id: 1, date: '2023-05-15', amount: 150, description: 'General Checkup' },
    { id: 2, date: '2023-04-20', amount: 300, description: 'Blood Test' },
    { id: 3, date: '2023-03-10', amount: 75, description: 'Prescription Refill' },
  ];

  const appointments = [
    { id: 1, date: '2023-06-01', time: '10:00 AM', doctor: 'Dr. Smith', department: 'Cardiology' },
    { id: 2, date: '2023-06-15', time: '2:30 PM', doctor: 'Dr. Johnson', department: 'General Practice' },
  ];

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.9 },
    active: { opacity: 1, scale: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 sm:p-6 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-6"
              >
                <User size={48} className="text-emerald-500 sm:hidden" />
                <User size={64} className="text-emerald-500 hidden sm:block" />
              </motion.div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{patientData.name}</h1>
                <p className="text-emerald-100 mt-2">Patient ID: 123456789</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-emerald-100 p-2 sm:p-4">
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {['overview', 'health', 'bills', 'appointments'].map((tab) => (
                <motion.button
                  key={tab}
                  variants={tabVariants}
                  initial="inactive"
                  animate={activeTab === tab ? 'active' : 'inactive'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium ${
                    activeTab === tab
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="p-4 sm:p-6 lg:p-10"
          >
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(patientData).map(([key, value]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-emerald-600 mb-2">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">{value}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'health' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4 sm:mb-6">Health Statistics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-emerald-600 mb-4">Heart Rate</h3>
                    <div className="h-60 sm:h-72 lg:h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={healthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="heartRate" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-emerald-600 mb-4">Blood Pressure</h3>
                    <div className="h-60 sm:h-72 lg:h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={healthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="bloodPressure" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {activeTab === 'bills' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4 sm:mb-6">Recent Bills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {bills.map((bill) => (
                    <motion.div
                      key={bill.id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm sm:text-base text-emerald-600 font-semibold">{bill.date}</div>
                        <div className="bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          ${bill.amount}
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{bill.description}</h3>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-500">Invoice #INV-{bill.id.toString().padStart(4, '0')}</span>
                        <button className="text-sm sm:text-base text-emerald-600 hover:text-emerald-800 font-medium">View Details</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4 sm:mb-6">Upcoming Appointments</h2>
                <div className="space-y-4 sm:space-y-6">
                  {appointments.map((appointment) => (
                    <motion.div
                      key={appointment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center"
                    >
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{appointment.doctor}</h3>
                        <p className="text-sm sm:text-base text-emerald-600">{appointment.department}</p>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <button className="bg-emerald-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base hover:bg-emerald-600 transition duration-300">
                          Reschedule
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-100 text-emerald-600 p-3 sm:p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-emerald-200 transition duration-300"
                  >
                    <Plus size={18} className="sm:hidden" />
                    <Plus size={20} className="hidden sm:block" />
                    <span className="text-sm sm:text-base">Schedule New Appointment</span>
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PatientProfilePage;
import React from 'react';


const Button = ({ children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
  
  const Input = ({ type, value, onChange, placeholder, className = '' }) => (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 ${className}`}
    />
  );
  
  const TabButton = ({ children, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 ${
        isActive ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'
      }`}
    >
      {children}
    </button>
  );
  
  const HealthcareProviderDashboard = () => {
    const [patients, setPatients] = React.useState([]);
    const [appointments, setAppointments] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [messageInput, setMessageInput] = React.useState('');
    const [activeTab, setActiveTab] = React.useState('doctor');
    const [doctor, setDoctor] = React.useState({});
  
    React.useEffect(() => {
      // Simulated data fetching
      setPatients([
        { id: 1, name: 'John Doe', age: 35, condition: 'Hypertension' },
        { id: 2, name: 'Jane Smith', age: 28, condition: 'Diabetes' },
      ]);
      setAppointments([
        { id: 1, patientName: 'John Doe', date: '2024-09-20', time: '10:00 AM' },
        { id: 2, patientName: 'Jane Smith', date: '2024-09-21', time: '2:00 PM' },
      ]);
      setDoctor({
        name: 'Dr. Emily Johnson',
        email: 'emily.johnson@healthcareprovider.com',
        username: 'dr_emily_j',
        specialization: 'Cardiology',
        yearsOfExperience: 10
      });
    }, []);
  
    const handleDateSelect = (date) => {
      setSelectedDate(date);
      // Fetch appointments for the selected date (to be implemented)
    };
  
    const handleSendMessage = () => {
      console.log('Sending message:', messageInput);
      setMessageInput('');
      // Implement actual message sending logic
    };
  
    return (
      <div className='bg-green-50 p-4'>
        <div className="p-4 m-32 font-sans bg-green-50 min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-green-800 animate-fade-in">
            Healthcare Provider Management 🩺
          </h1>
          <div className="mb-6 space-x-2 flex flex-wrap justify-start">
            <TabButton isActive={activeTab === 'doctor'} onClick={() => setActiveTab('doctor')}>Doctor Information</TabButton>
            <TabButton isActive={activeTab === 'records'} onClick={() => setActiveTab('records')}>Patient Records</TabButton>
            <TabButton isActive={activeTab === 'appointments'} onClick={() => setActiveTab('appointments')}>Appointments</TabButton>
            <TabButton isActive={activeTab === 'communication'} onClick={() => setActiveTab('communication')}>Patient Communication</TabButton>
          </div>
          
          <div className="animate-fade-in">
            {activeTab === 'doctor' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-green-700">Doctor Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Name:</p>
                    <p>{doctor.name}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>{doctor.email}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Username:</p>
                    <p>{doctor.username}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Specialization:</p>
                    <p>{doctor.specialization}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Years of Experience:</p>
                    <p>{doctor.yearsOfExperience}</p>
                  </div>
                </div>
              </div>
            )}
  
            {activeTab === 'records' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">Patient Records</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-green-200 bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-200 p-3 text-left">Name</th>
                        <th className="border border-green-200 p-3 text-left">Age</th>
                        <th className="border border-green-200 p-3 text-left">Condition</th>
                        <th className="border border-green-200 p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient) => (
                        <tr 
                          key={patient.id}
                          className="hover:bg-green-50 transition-colors duration-200"
                        >
                          <td className="border border-green-200 p-3">{patient.name}</td>
                          <td className="border border-green-200 p-3">{patient.age}</td>
                          <td className="border border-green-200 p-3">{patient.condition}</td>
                          <td className="border border-green-200 p-3">
                            <Button className="mr-2">View</Button>
                            <Button>Edit</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
  
            {activeTab === 'appointments' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">Appointments</h2>
                <div className="mb-4">
                  <h3 className="text-lg mb-2 text-green-600">Selected Date: {selectedDate.toDateString()}</h3>
                  <Input
                    type="date"
                    onChange={(e) => handleDateSelect(new Date(e.target.value))}
                    value={selectedDate.toISOString().split('T')[0]}
                    className="mb-4"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-green-200 bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-200 p-3 text-left">Patient</th>
                        <th className="border border-green-200 p-3 text-left">Time</th>
                        <th className="border border-green-200 p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr 
                          key={appointment.id}
                          className="hover:bg-green-50 transition-colors duration-200"
                        >
                          <td className="border border-green-200 p-3">{appointment.patientName}</td>
                          <td className="border border-green-200 p-3">{appointment.time}</td>
                          <td className="border border-green-200 p-3">
                            <Button className="mr-2">Reschedule</Button>
                            <Button>Cancel</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
  
            {activeTab === 'communication' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">Patient Communication</h2>
                <div className="mb-4 bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2 text-green-600">Recent Messages</h3>
                  <p className="text-gray-600">No recent messages</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-grow mb-2 sm:mb-0 sm:mr-2"
                  />
                  <Button onClick={handleSendMessage}>Send</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default HealthcareProviderDashboard;
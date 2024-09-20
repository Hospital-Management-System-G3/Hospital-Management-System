import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, Typography, Button, Select, MenuItem } from '@mui/material';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch('https://api.example.com/appointments');
      const data = await response.json();
      setAppointments(data);
    };
    fetchAppointments();

    const fetchAvailableSlots = async () => {
      const response = await fetch(`https://api.example.com/available-slots?date=${selectedDate.toISOString()}`);
      const data = await response.json();
      setAvailableSlots(data);
    };
    fetchAvailableSlots();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(new Date(date));
  };

  const handleBookAppointment = () => {
    console.log(`Booking appointment for ${selectedSlot}`);
    // Implement your booking logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Appointment Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <Typography variant="h6">Upcoming Appointments</Typography>
            </CardHeader>
            <CardContent>
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div className="flex items-center">
                    <Calendar className="mr-2" />
                    <span>{new Date(appointment.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2" />
                    <span>{appointment.doctorName}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <Typography variant="h6">Book New Appointment</Typography>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Select Date</label>
                <input
                  type="date"
                  value={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Available Slots</label>
                <Select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select a time slot</MenuItem>
                  {availableSlots.map((slot) => (
                    <MenuItem key={slot} value={slot}>{slot}</MenuItem>
                  ))}
                </Select>
              </div>
              <Button className="w-full" onClick={handleBookAppointment}>
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;

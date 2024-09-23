import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Select, MenuItem } from '@mui/material';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(''); // Date of booking
  const [availableSlots, setAvailableSlots] = useState([
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'
  ]); // Static list of available time slots
  const [selectedSlot, setSelectedSlot] = useState(''); // Time slot selection
  const [isBooked, setIsBooked] = useState(false); // State to check if appointment is booked

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Set selected date
  };

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedSlot) {
      alert('Please select both a date and a time slot to book.');
      return;
    }
    setIsBooked(true); // Simulate booking
    alert(`Appointment booked successfully for ${selectedDate} at ${selectedSlot}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Book an Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Booking Card */}
        <Card>
          <CardHeader>
            <Typography variant="h6">Book New Appointment</Typography>
          </CardHeader>
          <CardContent>
            {/* Select Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Select Time Slot */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Available Time Slots</label>
              <Select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>
                  Select a time slot
                </MenuItem>
                {availableSlots.map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* Book Button */}
            <Button className="w-full" onClick={handleBookAppointment} variant="contained" color="primary">
              Book Appointment
            </Button>
          </CardContent>
        </Card>

        {/* Confirmation Message */}
        {isBooked && (
          <div className="mt-6">
            <Typography variant="h6" className="text-green-600 text-center">
              Your appointment has been booked for {selectedDate} at {selectedSlot}.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;

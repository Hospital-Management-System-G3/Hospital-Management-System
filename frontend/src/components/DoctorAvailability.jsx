import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Grid, Typography, Card, CardContent } from '@mui/material';
import Cookies from 'js-cookie'; // استيراد مكتبة js-cookie

const DoctorAvailability = ({ doctorId }) => {
  const [availabilities, setAvailabilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // جلب التوافر عند تحميل المكون
  useEffect(() => {
    const fetchAvailabilities = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/doctors/${doctorId}/availabilities`);
        setAvailabilities(response.data);
      } catch (err) {
        setError('Failed to fetch availabilities');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailabilities();
  }, [doctorId]);

  const handleBooking = async (availabilityId) => {
    const userId = 1; // استبدل بـ ID المستخدم الفعلي من سياق المصادقة
    const totalPrice = availabilities.find(avail => avail.availability_id === availabilityId).total_price;

    try {
      const response = await axios.post('http://localhost:5000/api/doctors/book', {
        availabilityId,
        userId,
        doctorId,
        totalPrice,
      });

      // إعداد الكوكيز مع booking_id
      Cookies.set('booking_id', response.data.bookingId, { expires: 1 }); // صلاحية الكوكيز ليوم واحد

      // التعامل مع النجاح (مثل عرض رسالة نجاح أو تحديث الحالة)
      alert(response.data.message);
    } catch (err) {
      console.error('Error booking availability:', err);
      alert('Booking failed: ' + err.response.data.message);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <Grid container spacing={2}>
      {availabilities.map((availability) => (
        <Grid item xs={12} sm={6} md={4} key={availability.availability_id}>
          <Card>
            <CardContent>

            <Typography variant="h6">{`service: ${availability.service_type}`} </Typography>
              <Typography variant="body1">{`Date: ${availability.available_date}`}</Typography>
              <Typography variant="body1">{`From: ${availability.available_time_from} To: ${availability.available_time_to}`}</Typography>
              <Typography variant="body2">{`Price: $${availability.total_price}`} </Typography>

              <Button
                variant="contained"
                color="primary"
                onClick={() => handleBooking(availability.availability_id)}
                disabled={availability.is_booked} // تعطيل الزر إذا كان محجوزًا
              >
                {availability.is_booked ? 'Already Booked' : 'Book Now'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DoctorAvailability;

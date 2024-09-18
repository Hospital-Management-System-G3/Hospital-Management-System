// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample booking data
const insertSampleBookingData = async () => {
  const query = `
    INSERT INTO booking (user_id, doctor_id, date, time, status)
    VALUES
    (1, 11, '2024-10-01', '09:00:00', 'booked'),
    (1, 11, '2024-10-02', '10:00:00', 'booked'),
    (2, 12, '2024-10-03', '11:00:00', 'booked'),
    (3, 13, '2024-10-04', '14:00:00', 'booked'),
    (4, 14, '2024-10-05', '15:00:00', 'booked');
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample booking data inserted:', result.rowCount);
  } catch (error) {
    console.error('Error inserting sample booking data:', error);
  }
};

// Function to run the data insertion
const init = async () => {
  await insertSampleBookingData();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

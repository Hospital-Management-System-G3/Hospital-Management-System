// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample booking billing data
const insertSampleBookingBillingData = async () => {
  const query = `
    INSERT INTO BookingBilling (booking_id, user_id, total_price, created_at)
    VALUES
    (1, 1, 100.00, '2024-10-01 09:00:00'),
    (2, 1, 150.00, '2024-10-02 10:00:00'),
    (3, 2, 200.00, '2024-10-03 11:00:00'),
    (4, 3, 250.00, '2024-10-04 14:00:00'),
    (5, 4, 300.00, '2024-10-05 15:00:00');
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample booking billing data inserted:', result.rowCount);
  } catch (error) {
    console.error('Error inserting sample booking billing data:', error);
  }
};

// Function to run the data insertion
const init = async () => {
  await insertSampleBookingBillingData();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample data into BookingBilling
const insertBookingBillingData = async () => {
  const query = `
 INSERT INTO BookingBilling (booking_id, user_id, doctor_id, total_price, doctor_profit, hospital_profit, is_deleted)
    VALUES
    (1, 1, 11, 100.00, 70.00, 30.00, FALSE),  
    (2, 2, 12, 120.00, 80.00, 40.00, FALSE),  
    (3, 3, 11, 150.00, 100.00, 50.00, FALSE), 
    (4, 4, 13, 90.00, 60.00, 30.00, FALSE),   
    (5, 5, 12, 110.00, 75.00, 35.00, FALSE)   
    RETURNING *;
  `;

  try {
    // Execute the query to insert sample data
    const result = await pool.query(query);
    console.log('Sample booking billing data inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting booking billing data:', error);
  }
};

// Function to run the data insertion
const init = async () => {
  await insertBookingBillingData();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

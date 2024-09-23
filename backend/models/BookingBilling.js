// Import the database pool from config
const pool = require('../config/db');

// Function to create the 'BookingBilling' table
const createBookingBillingTable = async () => {
  const query = `
    DROP TABLE IF EXISTS BookingBilling; -- Drop if exists
    CREATE TABLE IF NOT EXISTS BookingBilling (
      billing_id SERIAL PRIMARY KEY,
      booking_id INTEGER REFERENCES doctor_availabilities(availability_id) ON DELETE CASCADE,
      user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
      doctor_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
      total_price DECIMAL(10, 2) DEFAULT 0,
      doctor_profit DECIMAL(10, 2) DEFAULT 0,
      hospital_profit DECIMAL(10, 2) DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_deleted BOOLEAN NOT NULL DEFAULT FALSE
    );
    
    ALTER TABLE doctor_availabilities ADD COLUMN IF NOT EXISTS status VARCHAR(20) NOT NULL DEFAULT 'active';

  `;

  try {
    // Execute the query to create the table
    await pool.query(query);
    console.log('BookingBilling table created or already exists');
  } catch (error) {
    console.error('Error creating BookingBilling table:', error);
  }
};

// Function to initialize the table creation
const init = async () => {
  await createBookingBillingTable();
  process.exit(); // Exit the process once the table is created
};

// Run the initialization
init();

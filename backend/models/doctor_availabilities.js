// createDoctorAvailabilitiesTable.js

// Import the database pool from config
const pool = require('../config/db');

// Define the function to create the 'doctor_availabilities' table
const createDoctorAvailabilitiesTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS doctor_availabilities (
      availability_id SERIAL PRIMARY KEY, -- معرّف فريد لكل سجل
      doctor_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE, -- معرّف الطبيب
      available_date DATE NOT NULL, -- التاريخ المتاح للحجز
      available_time_from TIME NOT NULL, -- وقت بدء التوفر للحجز
      available_time_to TIME NOT NULL, -- وقت انتهاء التوفر للحجز
      CONSTRAINT valid_availability CHECK (available_time_from < available_time_to) -- التحقق من أن وقت البداية أقل من وقت النهاية
    );
  `;

  try {
    // Execute the query to create the table
    await pool.query(query);
    console.log('doctor_availabilities table created or already exists');
  } catch (error) {
    console.error('Error creating doctor_availabilities table:', error);
  }
};

// Initialize the table creation process
const init = async () => {
  await createDoctorAvailabilitiesTable();
  process.exit(); // Exit the process once the table is created
};

// Run the initialization
init();

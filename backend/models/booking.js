 const pool = require('../config/db');

 const createBookingTable = async () => {
  const query = `
      CREATE TABLE IF NOT EXISTS booking (
      booking_id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
      doctor_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
      date DATE NOT NULL,
      time TIME NOT NULL,
      status VARCHAR(50) DEFAULT 'booked' -- status can be 'booked', 'completed', 'cancelled', etc.
 
    );
  `;

  try {
    await pool.query(query);
    console.log('booking table created or already exists');
  } catch (error) {
    console.error('Error creating booking table:', error);
  }
};

const init = async () => {
  await createBookingTable();  
  process.exit();  
};

 
init();


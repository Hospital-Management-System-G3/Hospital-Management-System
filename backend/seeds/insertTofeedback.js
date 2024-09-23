// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample data into feedback
const insertFeedbackData = async () => {
  const query = `
    INSERT INTO feedback (user_id, doctor_id, feedback_message)
    VALUES
    (1, 11, 'Great experience, very attentive doctor!'),
    (2, 12, 'The appointment was helpful, and the doctor was knowledgeable.'),
    (3, 11, 'I had to wait a long time, but the care was worth it.'),
    (4, 13, 'Excellent service, would recommend!'),
    (5, 12, 'Doctor was very friendly and professional.')
    RETURNING *;
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample feedback data inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting feedback data:', error);
  }
};

// Function to run the data insertion
const init = async () => {
  await insertFeedbackData();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample data into report
const insertReportData = async () => {
  const query = `
    INSERT INTO report (user_id, feedback_id, report_messege)
    VALUES
    (1, 1, 'I found this feedback inappropriate and misleading.'),
    (2, 1, 'This feedback does not reflect my experience.'),
    (3, 2, 'The feedback should be reviewed as it seems exaggerated.'),
    (4, 3, 'This feedback appears to have inaccuracies.'),
    (5, 2, 'I disagree with the positive comments about this doctor.')
    RETURNING *;
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample report data inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting report data:', error);
  }
};

// Function to run the data insertion
const init = async () => {
  await insertReportData();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

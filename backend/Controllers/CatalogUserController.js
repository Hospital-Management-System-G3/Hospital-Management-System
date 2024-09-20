const pool = require('../config/db'); // Database connection

// Function to fetch doctors and nurses
const getDoctorsAndNurses = async (req, res) => {
  const query = `
    SELECT username, profilepic 
    FROM users
    WHERE role IN ('doctor', 'nurse') AND is_deleted = false;
  `;

  try {
    const { rows } = await pool.query(query);
    res.status(200).json(rows); // Send the result as a JSON response
  } catch (error) {
    console.error('Error fetching doctors and nurses:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getDoctorsAndNurses };

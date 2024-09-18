// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample users (doctor, user, nurse, admin)
const insertSampleData = async () => {
  const query = `
    INSERT INTO users (username, password, email, role, profilepic, is_deleted)
    VALUES
    -- Insert 10 patients
    ('patient1', 'password123', 'patient1@example.com', 'patient', 'uploads/patient1_pic.jpg', false),
    ('patient2', 'password123', 'patient2@example.com', 'patient', 'uploads/patient2_pic.jpg', false),
    ('patient3', 'password123', 'patient3@example.com', 'patient', 'uploads/patient3_pic.jpg', false),
    ('patient4', 'password123', 'patient4@example.com', 'patient', 'uploads/patient4_pic.jpg', false),
    ('patient5', 'password123', 'patient5@example.com', 'patient', 'uploads/patient5_pic.jpg', false),
    ('patient6', 'password123', 'patient6@example.com', 'patient', 'uploads/patient6_pic.jpg', false),
    ('patient7', 'password123', 'patient7@example.com', 'patient', 'uploads/patient7_pic.jpg', false),
    ('patient8', 'password123', 'patient8@example.com', 'patient', 'uploads/patient8_pic.jpg', false),
    ('patient9', 'password123', 'patient9@example.com', 'patient', 'uploads/patient9_pic.jpg', false),
    ('patient10', 'password123', 'patient10@example.com', 'patient', 'uploads/patient10_pic.jpg', false),

    -- Insert 10 doctors
    ('doctor1', 'password123', 'doctor1@example.com', 'doctor', 'uploads/doctor1_pic.jpg', false),
    ('doctor2', 'password123', 'doctor2@example.com', 'doctor', 'uploads/doctor2_pic.jpg', false),
    ('doctor3', 'password123', 'doctor3@example.com', 'doctor', 'uploads/doctor3_pic.jpg', false),
    ('doctor4', 'password123', 'doctor4@example.com', 'doctor', 'uploads/doctor4_pic.jpg', false),
    ('doctor5', 'password123', 'doctor5@example.com', 'doctor', 'uploads/doctor5_pic.jpg', false),
    ('doctor6', 'password123', 'doctor6@example.com', 'doctor', 'uploads/doctor6_pic.jpg', false),
    ('doctor7', 'password123', 'doctor7@example.com', 'doctor', 'uploads/doctor7_pic.jpg', false),
    ('doctor8', 'password123', 'doctor8@example.com', 'doctor', 'uploads/doctor8_pic.jpg', false),
    ('doctor9', 'password123', 'doctor9@example.com', 'doctor', 'uploads/doctor9_pic.jpg', false),
    ('doctor10', 'password123', 'doctor10@example.com', 'doctor', 'uploads/doctor10_pic.jpg', false),

    -- Insert 10 nurses
    ('nurse1', 'password123', 'nurse1@example.com', 'nurse', 'uploads/nurse1_pic.jpg', false),
    ('nurse2', 'password123', 'nurse2@example.com', 'nurse', 'uploads/nurse2_pic.jpg', false),
    ('nurse3', 'password123', 'nurse3@example.com', 'nurse', 'uploads/nurse3_pic.jpg', false),
    ('nurse4', 'password123', 'nurse4@example.com', 'nurse', 'uploads/nurse4_pic.jpg', false),
    ('nurse5', 'password123', 'nurse5@example.com', 'nurse', 'uploads/nurse5_pic.jpg', false),
    ('nurse6', 'password123', 'nurse6@example.com', 'nurse', 'uploads/nurse6_pic.jpg', false),
    ('nurse7', 'password123', 'nurse7@example.com', 'nurse', 'uploads/nurse7_pic.jpg', false),
    ('nurse8', 'password123', 'nurse8@example.com', 'nurse', 'uploads/nurse8_pic.jpg', false),
    ('nurse9', 'password123', 'nurse9@example.com', 'nurse', 'uploads/nurse9_pic.jpg', false),
    ('nurse10', 'password123', 'nurse10@example.com', 'nurse', 'uploads/nurse10_pic.jpg', false),

    -- Insert 2 admins
    ('admin1', 'password123', 'admin1@example.com', 'admin', 'uploads/admin1_pic.jpg', false),
    ('admin2', 'password123', 'admin2@example.com', 'admin', 'uploads/admin2_pic.jpg', false)
    RETURNING *;
  `;

  try {
    // Execute the query to insert sample data
    const result = await pool.query(query);
    console.log('Sample users inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting sample users:', error);
  }
};

// Function to run the table creation and data insertion
const init = async () => {
  await insertSampleData();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample data into users
const insertUsers = async () => {
  const query = `
    INSERT INTO users (username, password, email, role, profilepic)
    VALUES
    ('john_doe', 'password123', 'john@example.com', 'doctor', 'profile1.jpg'),  
    ('jane_smith', 'password123', 'jane@example.com', 'doctor', 'profile2.jpg'),
    ('mike_jones', 'password123', 'mike@example.com', 'user', 'profile3.jpg'),  
    ('anna_taylor', 'password123', 'anna@example.com', 'user', 'profile4.jpg'), 
    ('sara_connor', 'password123', 'sara@example.com', 'user', 'profile5.jpg'), 
    ('bob_brown', 'password123', 'bob@example.com', 'doctor', 'profile6.jpg'),  
    ('linda_white', 'password123', 'linda@example.com', 'user', 'profile7.jpg'),
    ('tom_hanks', 'password123', 'tom@example.com', 'doctor', 'profile8.jpg')   
    RETURNING *;
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample users inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting users:', error);
  }
};

// Function to insert sample data into patient_records
const insertPatientRecords = async () => {
  const query = `
    INSERT INTO patient_records (user_id, medical_history, date_of_birth, phone, treatment_plan, notes, gender, height, weight, blood_type, allergies)
    VALUES
    (3, 'No known allergies', '1990-05-15', '123-456-7890', 'Regular checkup', 'All good', 'male', 180, 75, 'O+', 'None'),
    (4, 'Asthma', '1985-08-25', '098-765-4321', 'Follow-up on asthma treatment', 'Needs regular medication', 'female', 165, 60, 'A-', 'Pollen'),
    (5, 'Diabetes', '1975-02-10', '555-123-4567', 'Diet control', 'Monitor blood sugar', 'female', 170, 65, 'B+', 'None'),
    (6, 'Hypertension', '1988-03-20', '666-234-5678', 'Medication required', 'Regular checkups', 'male', 175, 80, 'AB+', 'None'),
    (7, 'Recent surgery', '1992-11-30', '777-345-6789', 'Post-op care', 'Rehabilitation required', 'female', 160, 55, 'O-', 'Penicillin')
    RETURNING *;
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample patient records inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting patient records:', error);
  }
};

// Function to insert sample data into doctor_availabilities
const insertDoctorAvailabilities = async () => {
  const query = `
    INSERT INTO doctor_availabilities (doctor_id, available_date, available_time_from, available_time_to, total_price, service_type)
    VALUES
    (1, '2024-10-01', '09:00:00', '12:00:00', 100.00, 'Consultation'),       -- Doctor 1
    (2, '2024-10-02', '10:00:00', '14:00:00', 120.00, 'Chemotherapy'),        -- Doctor 2
    (1, '2024-10-03', '13:00:00', '17:00:00', 150.00, 'Follow-Up Appointment'), -- Doctor 1
    (2, '2024-10-04', '08:00:00', '11:00:00', 90.00, 'Surgery'),              -- Doctor 2
    (6, '2024-10-05', '11:00:00', '15:00:00', 110.00, 'Radiation Therapy'),   -- Doctor 6
    (8, '2024-10-06', '14:00:00', '17:00:00', 200.00, 'Consultation'),        -- Doctor 8
    (1, '2024-10-07', '09:00:00', '12:00:00', 130.00, 'Routine Checkup'),    -- Doctor 1
    (2, '2024-10-08', '08:00:00', '10:00:00', 80.00, 'Vaccination'),          -- Doctor 2
    (6, '2024-10-09', '10:00:00', '12:00:00', 95.00, 'Therapy Session'),      -- Doctor 6
    (8, '2024-10-10', '15:00:00', '18:00:00', 175.00, 'Specialist Consultation') -- Doctor 8
    RETURNING *;
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample doctor availabilities inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting doctor availabilities:', error);
  }
};

// Function to insert sample data into BookingBilling
const insertBookingBilling = async () => {
  const query = `
    INSERT INTO BookingBilling (booking_id, user_id, doctor_id, total_price, doctor_profit, hospital_profit)
    VALUES
    (1, 3, 1, 100.00, 70.00, 30.00),  
    (2, 4, 2, 120.00, 80.00, 40.00),   
    (3, 5, 1, 150.00, 100.00, 50.00),  
    (4, 6, 6, 200.00, 140.00, 60.00),  
    (5, 7, 8, 175.00, 130.00, 45.00)   
    RETURNING *;
  `;

  try {
    const result = await pool.query(query);
    console.log('Sample booking billing records inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting booking billing records:', error);
  }
};

// Function to run the table creation and data insertion
const init = async () => {
  await insertUsers();
  await insertPatientRecords();
  await insertDoctorAvailabilities();
  await insertBookingBilling();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

// Import the database pool from config
const pool = require('../config/db');

// Function to insert sample data into patient_records
const insertPatientRecords = async () => {
  const query = `
    INSERT INTO patient_records (user_id, medical_history, date_of_birth, phone, treatment_plan, notes, gender, height, weight, blood_type, allergies)
    VALUES
    -- Data for user_id 1 to 10
    (1, 'No significant medical history.', '1985-05-15', '123-456-7890', 'Routine checkup', 'No additional notes', 'Male', 180, 75, 'O+', 'None'),
    (2, 'Diabetic since 2010.', '1990-07-20', '123-456-7891', 'Insulin therapy', 'Regular monitoring required', 'Female', 165, 65, 'A+', 'Penicillin allergy'),
    (3, 'Hypertension and hyperlipidemia.', '1982-03-22', '123-456-7892', 'Medication required', 'Exercise recommended', 'Male', 175, 80, 'B+', 'None'),
    (4, 'Asthma since childhood.', '1975-11-11', '123-456-7893', 'Inhalers prescribed', 'Avoid dust and allergens', 'Female', 160, 60, 'AB+', 'Dust allergy'),
    (5, 'No significant medical history.', '1988-01-05', '123-456-7894', 'Routine checkup', 'No additional notes', 'Male', 170, 70, 'O-', 'None'),
    (6, 'Chronic back pain.', '1992-08-30', '123-456-7895', 'Physical therapy', 'Avoid heavy lifting', 'Female', 155, 55, 'A-', 'None'),
    (7, 'Heart disease family history.', '1980-12-14', '123-456-7896', 'Medication and lifestyle changes', 'Regular cardiac checkups', 'Male', 185, 85, 'B-', 'None'),
    (8, 'No significant medical history.', '1995-04-18', '123-456-7897', 'Routine checkup', 'No additional notes', 'Female', 162, 62, 'AB-', 'None'),
    (9, 'Seasonal allergies.', '1983-09-10', '123-456-7898', 'Allergy medication', 'Avoid allergens during season', 'Male', 175, 78, 'O+', 'Seasonal pollen allergy'),
    (10, 'Previous surgery for appendicitis.', '1987-06-25', '123-456-7899', 'Follow-up appointments', 'No additional notes', 'Female', 168, 68, 'A+', 'None')
    RETURNING *;
  `;

  try {
    // Execute the query to insert sample data
    const result = await pool.query(query);
    console.log('Sample patient records inserted:', result.rows);
  } catch (error) {
    console.error('Error inserting patient records:', error);
  }
};

// Function to run the table creation and data insertion
const init = async () => {
  await insertPatientRecords();
  process.exit(); // Exit the process once the data is inserted
};

// Run the initialization
init();

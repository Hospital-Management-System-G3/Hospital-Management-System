  // server.js
  const express = require('express');
  const cors = require('cors');
  const bodyParser = require('body-parser');
  const pool = require('./config/db'); // Import the database pool
  const cookieParser = require('cookie-parser');
  const app = express();

  app.use(bodyParser.json());
  const path = require("path");
  app.use(cookieParser());
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  // Middleware
  ///husban
  const CatalogeRoute = require('./Routes/CatalogeRoute'); 
  const doctorRoutes = require('./routes/doctorRoutes');
  const feedbackRoutes = require('./routes/feedbackRoutes');
  const reportRoutes = require('./routes/reportRoutes');




  app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
  }));
  // Test DB connection
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
    } else {
      console.log('DB connected at:', res.rows[0].now); // Log connection timestamp
    }
  });
  const userRoute = require("./Routes/userRoute");
  app.use('/api/users' , userRoute)
  ///husban
  app.use('/api/users', CatalogeRoute);
  app.use('/api/doctors', doctorRoutes);
  app.use('/api/feedback', feedbackRoutes);
  app.use('/api/report', reportRoutes);


  // Routes
  app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });

  app.get('/test', (req, res) => {
    res.json({ message: 'Test route is working' });
  });

  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

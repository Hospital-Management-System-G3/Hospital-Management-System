// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./config/db"); // Import the database pool
const cookieParser = require("cookie-parser");
const app = express();
const infoAboutRoutes = require("./Routes/infoAboutRoutes");
const infoContactRoutes = require("./Routes/infoContactRoutes");
const settingsRoutes = require("./Routes/settingsRoutes");
const contactRoutes = require("./Routes/contactRoutes");
const feedbackRoutes = require("./Routes/feedbackRoutes");

app.use(bodyParser.json());
const path = require("path");
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Middleware

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// Test DB connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
  } else {
    console.log("DB connected at:", res.rows[0].now);
  }
});
const userRoute = require("./Routes/userRoute");
app.use("/api/users", userRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.get("/test", (req, res) => {
  res.json({ message: "Test route is working" });
});

app.use("/api", infoAboutRoutes);
app.use("/api", infoContactRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api", contactRoutes);
app.use("/api", feedbackRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

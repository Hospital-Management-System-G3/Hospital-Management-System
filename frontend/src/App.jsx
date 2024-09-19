import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/register";
import Login from "./Pages/login";
import HealthcareProviderDashboard from "./componentsUser/test";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<HealthcareProviderDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

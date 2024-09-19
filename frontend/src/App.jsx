import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactPage';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Header from './componentUser/header';
import Footer from './componentUser/footer';
import Register from "./Pages/register";
import Login from "./Pages/login";
import HealthcareProviderDashboard from "./componentsUser/test";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<HealthcareProviderDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

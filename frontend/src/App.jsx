import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AboutUsPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./componentUser/header";
import Footer from "./componentUser/footer";
import Register from "./Pages/register";
import Login from "./Pages/login";
 
import HealthcareProviderDashboard from "./pages/doctorManage/doctorManage";
 
import Admin from "./admin/HealthDashboard";
 import CheckoutPage from "./pages/checkout and payments";

const App = () => {
  const location = useLocation();

  // Check if the current path is "/admin"
  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
      {!isAdminRoute && <Header />}
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
 
          <Route path="/admin" element={<Admin />} />
         <Route path="/doctor" element={<HealthcareProviderDashboard />} />
         <Route path="/CheckoutPage" element={<CheckoutPage />} />

         </Routes>
 
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;

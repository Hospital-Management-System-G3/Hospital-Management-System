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
import Catalog from "./pages/Catalog";
// import Booking from './components/Booking';
import Admin from "./admin/HealthDashboard";
// import ErrorBoundary from './components/ErrorBoundary';
import HealthcareProviderDashboard from "./componentsUser/test";
import {UserDetail} from './pages/UserDetailComponent';
// import {DoctorAvailability} from './pages/UserDetailComponent';



const App = () => {
  const location = useLocation();

  // Check if the current path is "/admin"
  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
    {!isAdminRoute && <Header />}
    {/* <ErrorBoundary> */}
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/details/:username" element={<UserDetail doctorId={65} />} />
          {/* <Route path="/DoctorAvailability" element={ <DoctorAvailability  doctorId={65}  />} /> */}

         


          {/* <Route path="/Booking" element={<Booking />} /> */}


          <Route path="/test" element={<HealthcareProviderDashboard />} />
          </Routes>
        </div>
      {/* </ErrorBoundary> */}
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

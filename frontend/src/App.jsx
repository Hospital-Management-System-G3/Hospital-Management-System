import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/register";
import Login from "./Pages/login";
import CheckoutPage from "./pages/checkout and payments";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

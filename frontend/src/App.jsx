import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Catalog from "./pages/Catalog";
import CatalogDetailsPage from './pages/CatalogDetailsPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/details/:username" element={< CatalogDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

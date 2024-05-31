// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./App.css";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#262626] p-5 flex flex-col">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

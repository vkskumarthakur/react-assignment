// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import Profile from "./components/Profile";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#262626] flex flex-col">
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// src/components/Dashboard.js

import React, { useState, useEffect } from "react";
import Profile from "./Profile";

const Dashboard = () => {
  const [user, setUser] = useState({
    photo: "",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    pastExperience: "Software Developer at XYZ",
    skillSets: "React, Node.js, MongoDB",
    education: "BSc in Computer Science",
  });

  // Placeholder for fetching user profile logic
  useEffect(() => {
    console.log("Fetching user profile");
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <Profile user={user} setUser={setUser} />
    </div>
  );
};

export default Dashboard;

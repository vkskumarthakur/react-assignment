// src/components/Profile.js

import React, { useState } from "react";

const Profile = ({ user, setUser }) => {
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for updating profile logic
    console.log("Updating profile:", form);
    setUser(form);
    alert("Profile updated successfully");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Profile</h2>
        <input
          type="file"
          name="photo"
          onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
        />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input type="text" name="phone" value={form.phone} disabled />
        <textarea
          name="pastExperience"
          value={form.pastExperience}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="skillSets"
          value={form.skillSets}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="education"
          value={form.education}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;

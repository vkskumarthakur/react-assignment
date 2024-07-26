// src/components/Register.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import Axios

const Register = () => {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", form);
      console.log("User registered:", response.data);
      toast.success("User Registered");
      navigate("/login");
      // setTimeout(() => {
      //   navigate("/login");
      // }, 1000);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div
      className="flex rounded-2xl bg-[#232323] mx-auto md:w-[70%] overflow-hidden my-4"
      style={{ minHeight: "calc(100vh - 56px - 32px - 32px)" }}
    >
      <div className="hidden md:block flex-1">
        <img
          src="https://images.unsplash.com/photo-1447703693928-9cd89c8d3ac5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
          alt="Registration Background"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 p-3 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[90%] md:w-[70%] mx-auto"
        >
          <h2 className="font-bold text-2xl text-white">Create an Account</h2>
          <p className="text-[#646464]">Register and get started.</p>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="py-1 px-3 outline-none bg-[#323232] text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="py-1 px-3 outline-none bg-[#323232] text-white"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            className="py-1 px-3 outline-none bg-[#323232] text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="py-1 px-3 outline-none bg-[#323232] text-white"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            className="py-1 px-3 outline-none bg-[#323232] text-white"
          />
          <button
            type="submit"
            className="bg-[#19594D] py-1 px-3 text-white rounded-sm"
          >
            Register
          </button>
          <span className="text-[#646464]">
            Already Registered?
            <Link to="/login">
              <span className="text-white"> Login</span>
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
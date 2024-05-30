// src/components/Register.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    name: "",
    password: "",
    retypePassword: "",
    otp: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.retypePassword) {
      alert("Passwords do not match");
      return;
    }
    // Placeholder for registration logic
    console.log("Registering user:", form);
    navigate("/login");
  };

  return (
    <div
      className="flex rounded-md bg-white mx-auto w-[80%]"
      style={{ minHeight: "calc(100vh - 1.25rem - 1.25rem)" }}
    >
      <div className=" flex-1">
        <img
          src="https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 p-3 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[80%] mx-auto"
        >
          <h2 className="text-center font-bold text-2xl text-blue-500">
            Register User
          </h2>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            className="p-2 outline-none border-b-[1px] border-b-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="p-2 outline-none border-b-[1px] border-b-blue-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="p-2 outline-none border-b-[1px] border-b-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="p-2 outline-none border-b-[1px] border-b-blue-500"
          />
          <input
            type="password"
            name="retypePassword"
            placeholder="Re-type Password"
            onChange={handleChange}
            required
            className="p-2 outline-none border-b-[1px] border-b-blue-500"
          />
          <input
            type="text"
            name="otp"
            placeholder="OTP"
            onChange={handleChange}
            required
            className="p-2 outline-none border-b-[1px] border-b-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 text-white rounded-xl"
          >
            Register
          </button>
          <span className="text-center">
            Don't have an account?{" "}
            <Link to="/">
              <span className="text-blue-500 ">Sign Up</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;

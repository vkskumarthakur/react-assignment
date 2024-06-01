import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
    otp: "",
  });

  const [viaOtp, setViaOtp] = useState(false); // Define viaOtp state
  const [error, setError] = useState(""); // Define error state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      setError("User not registered");
      return;
    }

    // Check if entered phone matches with stored phone
    if (form.phone !== userData.phone) {
      setError("Phone number not recognized");
      return;
    }

    // If logging in via OTP
    if (form.otp !== "") {
      // Check if entered OTP matches with stored OTP (if any)
      if (form.otp !== userData.otp) {
        setError("Invalid OTP");
        return;
      }
    } else {
      // If logging in via password
      // Check if entered password matches with stored password
      if (form.password !== userData.password) {
        setError("Incorrect password");
        return;
      }
    }

    // If credentials are correct, navigate to dashboard
    console.log("User logged in:", form);
    navigate("/dashboard");
  };

  const handleOtpLogin = () => {
    setForm({ ...form, password: "" }); // Clear password field
    setError(""); // Clear previous error message
    setViaOtp(true);
  };

  const handlePasswordLogin = () => {
    setForm({ ...form, otp: "" }); // Clear OTP field
    setError(""); // Clear previous error message
    setViaOtp(false);
  };

  return (
    <div
      className="flex rounded-2xl bg-[#232323] mx-auto md:w-[70%] overflow-hidden mt-4"
      style={{ minHeight: "calc(100vh - 2.25rem - 2.25rem)" }}
    >
      <div className="hidden md:block flex-1">
        <img
          src="https://images.unsplash.com/photo-1447703693928-9cd89c8d3ac5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
          alt="Login Background"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 p-3 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[90%] md:w-[70%] mx-auto"
        >
          <h2 className="font-bold text-2xl text-white">
            Login to Your Account
          </h2>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-[#646464]">
            {viaOtp
              ? "Please enter your phone number to continue."
              : "Please enter your credentials to continue."}
          </p>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            className="py-1 px-3 outline-none bg-[#323232] text-white"
          />
          {!viaOtp && (
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="py-1 px-3 outline-none bg-[#323232] text-white"
            />
          )}
          {viaOtp && (
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              onChange={handleChange}
              required
              className="py-1 px-3 outline-none bg-[#323232] text-white"
            />
          )}
          <button
            type="submit"
            className="bg-[#19594D] py-1 px-3 text-white rounded-md"
          >
            {viaOtp ? "Verify OTP" : "Login"}
          </button>
          {!viaOtp && (
            <p onClick={handleOtpLogin} className="cursor-pointer text-white">
              Login using OTP
            </p>
          )}
          {viaOtp && (
            <p
              onClick={handlePasswordLogin}
              className="cursor-pointer text-white"
            >
              Login using Password
            </p>
          )}
          <span className="text-[#646464]">
            Not Registered Yet?
            <Link to="/register">
              <span className="text-white"> Register</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;

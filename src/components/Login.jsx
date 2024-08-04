import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      if (userData.data?.user) {
        const users = JSON.stringify(userData.data.user);
        localStorage.setItem("user", users);
        console.log("User logged in:", userData.data);
        toast.success("User Logged In");
        setTimeout(() => {
          navigate("/Profile");
        }, 1000);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid credentials");
      // toast.error("Invalid credentials");
    }
  };

  const handleOtpLogin = async () => {
    setForm({ ...form, password: "" }); // Clear password field
    setError(""); // Clear previous error message
    setViaOtp(true);
  };

  const handleSendOtp = async () => {
    const response = await axios.post(
      `https://localhost:5000/api/auth/send-otp`,
      { phone: form?.phone }
    );
    console.log(response, "send otp");
  };

  const handlePasswordLogin = () => {
    setForm({ ...form, otp: "" }); // Clear OTP field
    setError(""); // Clear previous error message
    setViaOtp(false);
  };

  return (
    <div
      className="flex rounded-2xl bg-[#232323] mx-auto md:w-[70%] overflow-hidden my-4"
      style={{ minHeight: "calc(100vh - 56px - 32px - 32px)" }}
    >
      <div className="hidden md:block flex-1">
        <img
          src="https://img.freepik.com/free-vector/online-workshop-abstract-concept-vector-illustration-elearning-workshop-collaborative-activity-get-certificate-online-free-online-education-selfisolation-master-class-abstract-metaphor_335657-5858.jpg?t=st=1722191619~exp=1722195219~hmac=73e20429e6fa8772d5513ac100ac6b1771b19d6457897d2e4b9a39eece149b77&w=740"
          className="h-full w-full object-cover"
          alt="Login Background"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 p-3 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[90%] md:w-[70%] mx-auto"
        >
          <h2 className="font-bold text-2xl text-white ">
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
          {!viaOtp && viaOtp && (
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              onChange={handleChange}
              required
              className="py-1 px-3 outline-none bg-[#323232] text-white"
            />
          )}
          {viaOtp ? (
            <button
              onClick={handleSendOtp}
              className="bg-[#19594D] py-1 px-3 text-white rounded-sm"
            >
              Send OTP
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#19594D] py-1 px-3 text-white rounded-sm"
            >
              Login
            </button>
          )}
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
      <ToastContainer />
    </div>
  );
};

export default Login;

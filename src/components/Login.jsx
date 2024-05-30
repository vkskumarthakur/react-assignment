import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
    otp: "",
  });

  const [viaOtp, setViaOtp] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log("Logging in user:", form);
    navigate("/dashboard");
  };

  const handleOtpLogin = () => {
    setViaOtp(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        {!viaOtp && (
          <>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </>
        )}
        {viaOtp && (
          <>
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              onChange={handleChange}
              required
            />
          </>
        )}
        <button type="submit">Login</button>
        {!viaOtp && (
          <p
            onClick={handleOtpLogin}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Login Via OTP
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

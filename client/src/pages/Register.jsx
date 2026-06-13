import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputStyle = {
    width: "100%",
    padding: "18px",
    borderRadius: "15px",
    border: "1px solid #ddd",
    marginBottom: "20px",
    fontSize: "16px",
    outline: "none",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    // Validation
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      // Save token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Save current user
      localStorage.setItem(
        "currentUser",
        JSON.stringify(response.data.user)
      );

      alert("Registration Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#eef8f9",
        overflow: "hidden",
      }}
    >
      {/* LEFT SECTION */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Decorative Leaves */}
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-20px",
            opacity: 0.12,
          }}
        >
          <g fill="#14B8C4">
            <path d="M90 260C70 180 110 120 170 80C160 140 140 220 90 260Z" />
            <path d="M150 290C140 220 180 150 240 120C230 180 200 250 150 290Z" />
            <path d="M40 230C20 180 40 120 90 90C90 150 80 210 40 230Z" />
          </g>
        </svg>

        <svg
          width="260"
          height="260"
          viewBox="0 0 320 320"
          style={{
            position: "absolute",
            top: "20px",
            left: "80px",
            opacity: 0.08,
            transform: "rotate(180deg)",
          }}
        >
          <g fill="#14B8C4">
            <path d="M90 260C70 180 110 120 170 80C160 140 140 220 90 260Z" />
            <path d="M150 290C140 220 180 150 240 120C230 180 200 250 150 290Z" />
            <path d="M40 230C20 180 40 120 90 90C90 150 80 210 40 230Z" />
          </g>
        </svg>

        <h1
          style={{
            fontSize: "64px",
            color: "#14B8C4",
            marginBottom: "20px",
            zIndex: 2,
          }}
        >
          MediMind AI
        </h1>

        <h2
          style={{
            fontSize: "36px",
            color: "#333",
            marginBottom: "20px",
            zIndex: 2,
          }}
        >
          Join Your Healthcare Journey
        </h2>

        <p
          style={{
            maxWidth: "500px",
            fontSize: "20px",
            color: "#666",
            lineHeight: "1.8",
            zIndex: 2,
          }}
        >
          Create your account to access symptom analysis,
          medicine information, AI assistance, and health history.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "550px",
            background: "white",
            padding: "60px",
            borderRadius: "40px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              color: "#14B8C4",
              fontSize: "48px",
              marginBottom: "10px",
            }}
          >
            Create Account
          </h1>

          <p
            style={{
              color: "#666",
              marginBottom: "40px",
              fontSize: "18px",
            }}
          >
            Start your MediMind journey today
          </p>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            onClick={handleRegister}
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "15px",
              border: "none",
              background: "#14B8C4",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "30px",
            }}
          >
            Create Account
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#555",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#14B8C4",
                fontWeight: "600",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
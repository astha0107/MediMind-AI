import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const handleLogin = () => {
    const { email, password } = formData;

    // Validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    // Save current logged-in user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    alert(`Welcome ${user.name}!`);

    navigate("/dashboard");
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
          Your Smart Healthcare Companion
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
          Analyze symptoms, learn about medicines,
          chat with AI, and manage your health —
          all in one place.
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
            width: "520px",
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
            Welcome Back
          </h1>

          <p
            style={{
              color: "#666",
              marginBottom: "40px",
              fontSize: "18px",
            }}
          >
            Sign in to continue
          </p>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            onClick={handleLogin}
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
            Login
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#555",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#14B8C4",
                fontWeight: "600",
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
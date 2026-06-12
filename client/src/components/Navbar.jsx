import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Symptoms",
      path: "/symptoms",
      icon: "🩺",
    },
    {
      name: "Medicine",
      path: "/medicine",
      icon: "💊",
    },
    {
      name: "AI Chat",
      path: "/chat",
      icon: "🤖",
    },
    {
      name: "History",
      path: "/history",
      icon: "📜",
    },
  ];

  const handleLogout = () => {
  localStorage.removeItem("currentUser");
  navigate("/");
};

  return (
    <nav
      style={{
        width: "250px",
        height: "100vh",
        background: "#14B8C4",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        color: "white",
        borderTopRightRadius: "40px",
        borderBottomRightRadius: "40px",
        boxShadow: "5px 0 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          MediMind AI
        </h1>

        <p
          style={{
            opacity: 0.9,
            fontSize: "15px",
          }}
        >
          Welcome,
        </p>

        <h3
          style={{
            marginTop: "5px",
            fontWeight: "600",
          }}
        >
          {currentUser?.name || "User"} 👋
        </h3>
      </div>

      {/* Menu Items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "18px 20px",
                borderRadius: "18px",
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                background: isActive
                  ? "rgba(255,255,255,0.22)"
                  : "transparent",
                boxShadow: isActive
                  ? "0 8px 20px rgba(0,0,0,0.12)"
                  : "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.18)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.12)";
                  e.currentTarget.style.transform =
                    "translateX(8px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background =
                    "transparent";
                  e.currentTarget.style.boxShadow =
                    "none";
                  e.currentTarget.style.transform =
                    "translateX(0)";
                }
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                }}
              >
                {item.icon}
              </span>

              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        style={{
          marginTop: "auto",
          padding: "18px",
          border: "none",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.2)",
          color: "white",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "rgba(255,255,255,0.3)";
          e.currentTarget.style.transform =
            "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "rgba(255,255,255,0.2)";
          e.currentTarget.style.transform =
            "translateY(0)";
        }}
      >
        🚪 Logout
      </button>
    </nav>
  );
}

export default Navbar;
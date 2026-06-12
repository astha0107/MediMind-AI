import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const cards = [
    {
      title: "Symptom Checker",
      description: "Analyze your symptoms instantly.",
      icon: "🩺",
      path: "/symptoms",
    },
    {
      title: "Medicine Search",
      description: "Learn about medicines and precautions.",
      icon: "💊",
      path: "/medicine",
    },
    {
      title: "AI Chatbot",
      description: "Ask MediMind AI health questions.",
      icon: "🤖",
      path: "/chat",
    },
    {
      title: "Health History",
      description: "Review your previous analyses.",
      icon: "📜",
      path: "/history",
    },
  ];

  return (
    <div
      style={{
        marginLeft: "250px",
        minHeight: "100vh",
        background: "#eef8f9",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1150px",
        }}
      >
        {/* Welcome Banner */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #14B8C4, #0EA5B7)",
            color: "white",
            borderRadius: "35px",
            padding: "40px",
            marginBottom: "40px",
            boxShadow:
              "0 20px 40px rgba(20,184,196,0.25)",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            Welcome back,{" "}
            {currentUser?.name || "User"} 👋
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.95,
              lineHeight: "1.7",
            }}
          >
            Your smart healthcare companion is ready.
            Check symptoms, explore medicines,
            chat with AI, and manage your health.
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
            marginBottom: "45px",
          }}
        >
          <StatCard
            title="Symptom Checks"
            value="12"
            icon="🩺"
          />

          <StatCard
            title="AI Conversations"
            value="24"
            icon="🤖"
          />

          <StatCard
            title="Medicines Viewed"
            value="8"
            icon="💊"
          />
        </div>

        {/* Explore */}
        <h2
          style={{
            marginBottom: "25px",
            color: "#333",
          }}
        >
          Explore MediMind
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => navigate(card.path)}
              style={{
                background: "white",
                borderRadius: "35px",
                padding: "35px",
                cursor: "pointer",
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(20,184,196,0.20)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>

              <h2
                style={{
                  marginBottom: "15px",
                  color: "#333",
                }}
              >
                {card.title}
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.7",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Health Tip */}
        <div
          style={{
            background: "white",
            borderRadius: "35px",
            padding: "35px",
            marginTop: "50px",
            boxShadow:
              "0 15px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#14B8C4",
              marginBottom: "15px",
            }}
          >
            🌿 Health Tip of the Day
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            Drinking enough water every day improves
            concentration, energy levels, digestion,
            and overall well-being. Aim for at least
            2–3 liters of water daily.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "30px",
        padding: "30px",
        boxShadow:
          "0 15px 30px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          fontSize: "36px",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#666",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: "#14B8C4",
          fontSize: "36px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default Dashboard;
function History() {
  const historyData =
    JSON.parse(localStorage.getItem("history")) || [];

  const getSeverityColor = (severity) => {
    if (severity === "High") return "#ef4444";
    if (severity === "Medium") return "#f59e0b";
    return "#10b981";
  };

  const clearHistory = () => {
    if (
      window.confirm(
        "Are you sure you want to clear your history?"
      )
    ) {
      localStorage.removeItem("history");
      window.location.reload();
    }
  };

  return (
    <div
      style={{
        marginLeft: "250px",
        minHeight: "100vh",
        background: "#eef8f9",
        padding: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#14B8C4",
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            📜 Health History
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
            }}
          >
            Review your previous symptom analyses.
          </p>
        </div>

        {historyData.length > 0 && (
          <button
            onClick={clearHistory}
            style={{
              padding: "14px 22px",
              border: "none",
              borderRadius: "15px",
              background: "#ef4444",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            🗑 Clear History
          </button>
        )}
      </div>

      {historyData.length === 0 ? (
        <div
          style={{
            background: "white",
            borderRadius: "30px",
            padding: "60px",
            textAlign: "center",
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
            No History Found
          </h2>

          <p
            style={{
              color: "#666",
            }}
          >
            Analyze your symptoms to start building
            your health history.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          {historyData.map((record, index) => (
            <div
              key={index}
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                <h2
                  style={{
                    color: "#14B8C4",
                  }}
                >
                  📅 {record.date}
                </h2>

                <span
                  style={{
                    background: getSeverityColor(
                      record.severity
                    ),
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontWeight: "600",
                  }}
                >
                  {record.severity}
                </span>
              </div>

              <p
                style={{
                  marginBottom: "15px",
                  color: "#555",
                }}
              >
                <strong>🤒 Symptoms:</strong>{" "}
                {record.symptoms.join(", ")}
              </p>

              <p
                style={{
                  color: "#555",
                }}
              >
                <strong>
                  🩺 Possible Disease:
                </strong>{" "}
                {record.disease}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
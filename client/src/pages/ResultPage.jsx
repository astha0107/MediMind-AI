import { useLocation, useNavigate } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    symptoms = [],
    disease = "Unknown Condition",
    precautions = [],
    medicines = [],
    severity = "Low",
  } = location.state || {};

  const severityColor =
    severity === "High"
      ? "#EF4444"
      : severity === "Medium"
      ? "#F59E0B"
      : "#14B8C4";

  return (
    <div
      style={{
        marginLeft: "250px",
        minHeight: "100vh",
        background: "#eef8f9",
        padding: "50px",
      }}
    >
      <h1
        style={{
          color: "#14B8C4",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        🩺 Analysis Result
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Here's what MediMind AI found based on your symptoms.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: "35px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* Selected Symptoms */}
        <h2 style={{ marginBottom: "20px" }}>
          🤒 Selected Symptoms
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "35px",
          }}
        >
          {symptoms.map((symptom) => (
            <span
              key={symptom}
              style={{
                background: "#14B8C4",
                color: "white",
                padding: "8px 16px",
                borderRadius: "20px",
              }}
            >
              {symptom}
            </span>
          ))}
        </div>

        {/* Disease */}
        <h2 style={{ marginBottom: "20px" }}>
          🩺 Possible Disease
        </h2>

        <div
          style={{
            background: "#dff7f9",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "35px",
            fontSize: "28px",
            fontWeight: "700",
            color: "#14B8C4",
          }}
        >
          {disease}
        </div>

        {/* Severity */}
        <h2 style={{ marginBottom: "20px" }}>
          ⚠ Severity Level
        </h2>

        <div
          style={{
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "20px",
            background: severityColor,
            color: "white",
            fontWeight: "700",
            marginBottom: "35px",
          }}
        >
          {severity}
        </div>

        {/* Medicines */}
        <h2 style={{ marginBottom: "20px" }}>
          💊 Recommended Medicines
        </h2>

        <div
          style={{
            background: "#f8f8f8",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        >
          {medicines.length > 0 ? (
            <ul style={{ lineHeight: "2" }}>
              {medicines.map((medicine, index) => (
                <li key={index}>{medicine}</li>
              ))}
            </ul>
          ) : (
            <p>
              No medicine recommendation available.
            </p>
          )}
        </div>

        {/* Precautions */}
        <h2 style={{ marginBottom: "20px" }}>
          ✅ Precautions
        </h2>

        <ul
          style={{
            lineHeight: "2",
            paddingLeft: "25px",
            marginBottom: "40px",
          }}
        >
          {precautions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Emergency Warning */}
        {severity === "High" && (
          <div
            style={{
              background: "#FEE2E2",
              color: "#B91C1C",
              padding: "20px",
              borderRadius: "20px",
              marginBottom: "30px",
              fontWeight: "600",
            }}
          >
            🚨 Please seek immediate medical attention.
          </div>
        )}

        <button
          onClick={() => navigate("/symptoms")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            border: "none",
            background: "#14B8C4",
            color: "white",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Check Again
        </button>

        <p
          style={{
            marginTop: "30px",
            color: "#888",
            fontSize: "14px",
            textAlign: "center",
            lineHeight: "1.6",
          }}
        >
          Disclaimer: This application is intended for educational
          purposes only and does not provide an official medical diagnosis.
          Always consult a qualified healthcare professional.
        </p>
      </div>
    </div>
  );
}

export default ResultPage;
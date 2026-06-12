import { useState } from "react";
import { useNavigate } from "react-router-dom";
import diseaseData from "../data/diseaseData";

function SymptomChecker() {
  const navigate = useNavigate();

  const symptomsList = [
    "Fever",
    "Headache",
    "Cough",
    "Fatigue",
    "Sore Throat",
    "Body Pain",
    "Vomiting",
    "Runny Nose",
    "Nausea",
    "Dizziness",
    "Chest Pain",
    "Shortness of Breath",
  ];

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleSymptomClick = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(
        selectedSymptoms.filter((item) => item !== symptom)
      );
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleAnalyze = () => {
    let result = {
      disease: "Unknown Condition",
      precautions: [
        "Please consult a healthcare professional for proper diagnosis.",
      ],
      medicines: [],
      severity: "Low",
    };

    // Find matching disease
    for (let symptom of selectedSymptoms) {
      if (diseaseData[symptom]) {
        result = diseaseData[symptom];
        break;
      }
    }

    // Save to history
    const history =
      JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({
      symptoms: selectedSymptoms,
      disease: result.disease,
      severity: result.severity,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "history",
      JSON.stringify(history)
    );

    // Navigate to Result Page
    navigate("/result", {
      state: {
        symptoms: selectedSymptoms,
        disease: result.disease,
        precautions: result.precautions,
        medicines: result.medicines,
        severity: result.severity,
      },
    });
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
      <h1
        style={{
          color: "#14B8C4",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        🩺 Symptom Checker
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Select all symptoms you are experiencing.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: "35px",
          padding: "40px",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {symptomsList.map((symptom) => (
            <div
              key={symptom}
              onClick={() =>
                handleSymptomClick(symptom)
              }
              style={{
                padding: "20px",
                borderRadius: "18px",
                cursor: "pointer",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "16px",
                border: selectedSymptoms.includes(symptom)
                  ? "2px solid #14B8C4"
                  : "2px solid #e0e0e0",
                background: selectedSymptoms.includes(symptom)
                  ? "#dff7f9"
                  : "white",
                boxShadow: selectedSymptoms.includes(symptom)
                  ? "0 10px 25px rgba(20,184,196,0.15)"
                  : "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              {selectedSymptoms.includes(symptom)
                ? "✅ "
                : "⬜ "}
              {symptom}
            </div>
          ))}
        </div>

        {selectedSymptoms.length > 0 && (
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <h3
              style={{
                color: "#14B8C4",
                marginBottom: "15px",
              }}
            >
              Selected Symptoms:
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {selectedSymptoms.map((symptom) => (
                <span
                  key={symptom}
                  style={{
                    background: "#14B8C4",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "14px",
                  }}
                >
                  {symptom}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={selectedSymptoms.length === 0}
          style={{
            marginTop: "40px",
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            border: "none",
            background:
              selectedSymptoms.length === 0
                ? "#bdbdbd"
                : "#14B8C4",
            color: "white",
            fontSize: "18px",
            fontWeight: "600",
            cursor:
              selectedSymptoms.length === 0
                ? "not-allowed"
                : "pointer",
            transition: "0.3s",
          }}
        >
          Analyze Symptoms
        </button>
      </div>
    </div>
  );
}

export default SymptomChecker;
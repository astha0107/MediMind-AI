import { useState } from "react";
import medicineData from "../data/medicineData";

function MedicineSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedicines = medicineData.filter((medicine) =>
    medicine.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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
        💊 Medicine Search
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Search medicines to learn about their uses,
        dosage, and side effects.
      </p>

      <input
        type="text"
        placeholder="Search medicine..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "18px",
          borderRadius: "18px",
          border: "2px solid #14B8C4",
          outline: "none",
          fontSize: "16px",
          marginBottom: "40px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <div
              key={medicine.name}
              style={{
                background: "white",
                borderRadius: "30px",
                padding: "30px",
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.08)",
              }}
            >
              <h2
                style={{
                  color: "#14B8C4",
                  marginBottom: "20px",
                }}
              >
                💊 {medicine.name}
              </h2>

              <p
                style={{
                  marginBottom: "15px",
                  color: "#555",
                }}
              >
                <strong>Uses:</strong>{" "}
                {medicine.uses}
              </p>

              <p
                style={{
                  marginBottom: "15px",
                  color: "#555",
                }}
              >
                <strong>Dosage:</strong>{" "}
                {medicine.dosage}
              </p>

              <p
                style={{
                  color: "#555",
                }}
              >
                <strong>Side Effects:</strong>{" "}
                {medicine.sideEffects}
              </p>
            </div>
          ))
        ) : (
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "30px",
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h2>No medicine found.</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicineSearch;
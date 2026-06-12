const diseaseData = {
  Fever: {
    disease: "Flu",
    precautions: [
      "Drink plenty of fluids",
      "Take adequate rest",
      "Monitor body temperature",
      "Consult a doctor if fever persists",
    ],
    medicines: ["Paracetamol", "Ibuprofen"],
    severity: "Medium",
  },

  Headache: {
    disease: "Migraine",
    precautions: [
      "Rest in a dark room",
      "Avoid loud noises",
      "Stay hydrated",
    ],
    medicines: ["Ibuprofen"],
    severity: "Medium",
  },

  Cough: {
    disease: "Common Cold",
    precautions: [
      "Drink warm fluids",
      "Get enough sleep",
      "Avoid cold foods",
    ],
    medicines: ["Cough Syrup"],
    severity: "Low",
  },

  "Chest Pain": {
    disease: "Urgent Medical Attention Required",
    precautions: [
      "Seek immediate medical help",
      "Do not ignore symptoms",
      "Visit the nearest hospital",
    ],
    medicines: [],
    severity: "High",
  },

  "Shortness of Breath": {
    disease: "Urgent Medical Attention Required",
    precautions: [
      "Seek emergency care immediately",
    ],
    medicines: [],
    severity: "High",
  },
};

export default diseaseData;
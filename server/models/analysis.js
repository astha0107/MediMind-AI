const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    symptoms: {
      type: [String],
      required: true,
    },

    disease: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      required: true,
    },

    medicines: {
      type: [String],
      required: true,
    },

    precautions: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Analysis",
  analysisSchema
);
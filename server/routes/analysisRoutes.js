const express = require("express");

const router = express.Router();

const {
  saveAnalysis,
  getHistory,
} = require("../controllers/analysisController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

router.post(
  "/",
  authMiddleware,
  saveAnalysis
);

router.get(
  "/",
  authMiddleware,
  getHistory
);

module.exports = router;
const Analysis = require("../models/Analysis");

exports.saveAnalysis = async (req, res) => {
  try {
    const analysis = await Analysis.create({
      user: req.user.id,
      symptoms: req.body.symptoms,
      disease: req.body.disease,
      severity: req.body.severity,
      medicines: req.body.medicines,
      precautions: req.body.precautions,
    });

    res.status(201).json(analysis);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await Analysis.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(history);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
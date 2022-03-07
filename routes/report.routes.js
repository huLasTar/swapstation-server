const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Report = require("../models/Report.model");
const User = require("../models/User.model");

// GET create reports page:
router.get("/reports/create", (req, res, next) => {
  Report.find()
    .then((allReports) => res.json(allReports))
    .catch((err) => res.json(err));
});

// POST a new report:
router.post("/reports/create", (req, res, next) => {
  const { title, category, condition, description, purchasable, price } =
    req.body;

  Report.create({
    title,
    category,
    condition,
    description,
    purchasable,
    price,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// GET all reports:
router.get("/reports", (req, res, next) => {
  Report.find()
    // .populate("tasks")
    .then((allReports) => res.json(allReports))
    .catch((err) => res.json(err));
});

// GET a specific report by ID:
router.get("/reports/:reportId", (req, res, next) => {
  const { reportId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reportId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Report document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Report.findById(reportId)
    // .populate("tasks")
    .then((report) => res.status(200).json(report))
    .catch((error) => res.json(error));
});

// PUT - Updates a specific report by ID:
router.put("/reports/:reportId", (req, res, next) => {
  const { reportId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reportId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Report.findByIdAndUpdate(reportId, req.body, { new: true })
    .then((updatedReport) => res.json(updatedReport))
    .catch((error) => res.json(error));
});

// DELETE a specific report by ID:
router.delete("/reports/:reportId", (req, res, next) => {
  const { reportId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reportId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Report.findByIdAndRemove(reportId)
    .then(() =>
      res.json({
        message: `Report with ${reportId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;

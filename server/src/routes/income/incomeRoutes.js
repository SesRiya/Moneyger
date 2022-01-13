const express = require("express");
const {
  createIncCtrl,
  fetchAllIncCtrl,
  fetchIncDetailCtrl,
  updateIncCtrl, deleteIncCtrl
  
} = require("../../controllers/income/incomeCtrl");

const incomeRoute = express.Router();

const authMiddleware = require("../../middleware/authMiddleware")


incomeRoute.post("/", authMiddleware, createIncCtrl);
incomeRoute.get("/", authMiddleware, fetchAllIncCtrl);
incomeRoute.get("/:id",authMiddleware, fetchIncDetailCtrl);
incomeRoute.put("/:id", authMiddleware,updateIncCtrl);
incomeRoute.delete("/:id",authMiddleware, deleteIncCtrl);

module.exports = incomeRoute;

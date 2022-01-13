const express = require("express");
const {
  createExpensesCtrl,
  fetchAllExpCtrl,
  fetchExpDetailCtrl,
  updateExpCtrl,
  deleteExpCtrl,
} = require("../../controllers/expenses/expensesCtrl");


const expensesRoute = express.Router();

const authMiddleware = require("../../middleware/authMiddleware")



expensesRoute.post("/", authMiddleware,createExpensesCtrl);
expensesRoute.get("/",authMiddleware,fetchAllExpCtrl);
expensesRoute.get("/:id", authMiddleware,fetchExpDetailCtrl);
expensesRoute.put("/:id",  authMiddleware,updateExpCtrl);
expensesRoute.delete("/:id", authMiddleware,deleteExpCtrl);

module.exports = expensesRoute;

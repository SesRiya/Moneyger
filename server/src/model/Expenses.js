const mongoose = require("mongoose");

//schema object
const expensesSourceSchema = mongoose.Schema(
  {
    title: {
      required: [true, "Title is required"],
      type: String,
    },
    description: {
      required: [true, "Description is required"],
      type: String,
    },
    type: {
      type: String,
      default: "expenses",
    },
    amount: {
      required: [true, "Amount is required"],
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, //MUST BE MONGODB ID
      ref: "User",
      required: [true, "User ID is required"],
    },
  },
  {
    timestamp: true,
    toJSON:{
      virtuals:true,
    },
    toObject:{
      virtuals:true,
    }
  }
);
//pagination

const Expenses = mongoose.model("Expenses", expensesSourceSchema);

module.exports = Expenses;
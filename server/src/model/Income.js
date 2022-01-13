const mongoose = require("mongoose");

//schema object
const incomeSourceSchema = mongoose.Schema(
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
      default: "income",
    },
    amount: {
      required: [true, "Amount is required"],
      type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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


const Income = mongoose.model("Income", incomeSourceSchema);

module.exports = Income;
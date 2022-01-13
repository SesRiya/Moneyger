const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/Income");

//create income
const createIncCtrl = expressAsyncHandler(async (req, res) => {
  const { title, amount, description } = req.body;
  try {
    const income = await Income.create({
      title,
      amount,
      description,
      user:req?.user?._id,
    });
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//get all income
const fetchAllIncCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.headers);
  try {
    const income = await Income.find().populate('user');
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

// get single income
const fetchIncDetailCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.params);
  const { id } = req?.params;
  try {
    const income = await Income.findById(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//update
const updateIncCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { title, amount, description } = req.body;
  try {
    const income = await Income.findByIdAndUpdate(
      id,
      {
        title,
        description,
        amount,
      },
      { new: true }
    );
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//delete
const deleteIncCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;

  try {
    const income = await Income.findByIdAndDelete(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});


module.exports = { createIncCtrl, fetchAllIncCtrl, fetchIncDetailCtrl, updateIncCtrl, deleteIncCtrl  };

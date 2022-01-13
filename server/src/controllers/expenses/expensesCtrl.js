const expressAsyncHandler = require("express-async-handler");
const Expenses = require("../../model/Expenses");

//create 
const createExpensesCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.user);
  const { title, amount, description, user} = req.body;
  try {
    const expenses = await Expenses.create({
      title,
      amount,
      description,
      user,
      user:req?.user?._id
    });
    res.json(expenses);
  } catch (error) {
    res.json(error);
  }
});

//get all income
const fetchAllExpCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const expenses = await Expenses.find().populate('user');
    res.json(expenses);
  } catch (error) {
    res.json(error);
  }
});



// const fetchAllExpCtrl = expressAsyncHandler(async (req, res) => {
//   console.log(req?.query);
//   const { page } = req?.query;
//   try {
//     const expense = await Expenses.paginate(
//       {},
//       { limit: 10, page: Number(page), populate: "user" }
//     );
//     res.json(expense);
//   } catch (error) {
//     res.json(error);
//   }
// });

// get single income
const fetchExpDetailCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.user);
  const { id } = req?.params;
  try {
    const expenses = await Expenses.findById(id);
    res.json(expenses);
  } catch (error) {
    res.json(error);
  }
});

//update
const updateExpCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { title, amount, description } = req.body;
  try {
    const expense = await Expense.findByIdAndUpdate(
      id,
      {
        title,
        description,
        amount,
      },
      { new: true }
    );
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});
//delete
const deleteExpCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;

  try {
    const expense = await Expense.findByIdAndDelete(id);
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});


module.exports = { createExpensesCtrl, fetchAllExpCtrl, fetchExpDetailCtrl, updateExpCtrl, deleteExpCtrl };

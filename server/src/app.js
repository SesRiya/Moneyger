const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect =  require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/incomeRoutes");
const expensesRoute = require("./routes/expenses/expensesRoutes");


const app = express();
//env file path
dotenv.config();

// connect to database
dbConnect();

//MIDDLEWARES
//user created and parsed to json automatically
app.use(express.json());
//configure to allow frontend to make api call
app.use(cors());
app.get("/", (req, res) => {
    res.json({ msg: "Welcome your Moneyger" });
  });
  // users routes
  app.use("/api/users", userRoute);
  
//income routes
app.use('/api/income', incomeRoute);
app.use('/api/expenses', expensesRoute);

//error handling
app.use(notFound);
app.use(errorHandler);



module.exports = app;


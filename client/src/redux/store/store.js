import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../slices/expenses/expensesSlices";
import incomeReducer from "../slices/income/incomeSlices";
import usersReducer from '../slices/users/usersSlices'


const store =configureStore({
    reducer: {
        users: usersReducer,
        expenses: expensesReducer,
        income: incomeReducer,
    
    },
});

export default store;
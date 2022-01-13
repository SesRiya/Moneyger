import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import AddExpenses from "./pages/expenses/AddExpenses";
import ExpensesList from "./pages/expenses/ExpensesList";
import Home from './pages/Home';
import AddIncome from "./pages/income/AddIncome";
import Login from "./pages/users/Login";
import Profile from "./pages/users/Profile";
import Register from "./pages/users/Register";




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/addIncome" component={AddIncome} />
    <Route exact path="/addExpenses" component={AddExpenses} />
    <Route exact path="/expenses" component={ExpensesList} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

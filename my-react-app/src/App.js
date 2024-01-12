import "./App.css";
import Card from "./components/UI/Card";
import Expense from "./components/Expense";
import { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import FilterByYear from "./components/Expenses/filterByYear";
const App = () => {
  const [enteredExpenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState("");
  const addExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  return (
    <>
      <div>
        <Expense onAddExpense={addExpenseHandler} />
      </div>
      <Card className="CardItems">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <FilterByYear items={enteredExpenses} year={filteredYear}/>
      </Card>
    </>
  );
};

export default App;

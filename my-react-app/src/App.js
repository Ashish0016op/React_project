import "./App.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expense";
import { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
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
  const filteredExpenseYear = enteredExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
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
        {filteredExpenseYear.length === 0 ? (
          <p style={{color:"red"}}>No expenses found!!</p>
        ) : (
          filteredExpenseYear.map((expense, index) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              location={expense.location}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </>
  );
};

export default App;

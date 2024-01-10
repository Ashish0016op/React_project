import "./App.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expense";
import { useState } from "react";
const App=() => {
  const [enteredExpenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString()
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };
  return (
    <>
      <div>
        <Expense onAddExpense={addExpenseHandler}/>
      </div>
      <Card className="CardItems">
        {enteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}

export default App;

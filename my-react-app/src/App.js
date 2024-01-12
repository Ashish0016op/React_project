import "./App.css";
import Card from "./components/UI/Card";
import Expense from "./components/Expense";
import { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import FilterByYear from "./components/Expenses/filterByYear";
const App = () => {
  const [enteredExpenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState("");
  const [isFormVisible,setFormVisible]=useState(false);
  const addExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setFormVisible(false);
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const showForm=()=>{
    setFormVisible(true);
  }
  const CancelForm=()=>{
    setFormVisible(false);
  }
  
  return (
    <>
      <div>
        {!isFormVisible && <button onClick={showForm}>Add New Expense</button>}
        {isFormVisible && <Expense onAddExpense={addExpenseHandler} onCancel={CancelForm}/>}
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

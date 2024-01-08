import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { title: "Food", amount: 10, location: "patna_market " },
    { title: "Petrol", amount: 100, location: "patna_market" },
    { title: "Movies", amount: 200, location: "patna_market" },
  ];
  return (
    <>
      <h2>Expenses Itmes</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </>
  );
}

export default App;

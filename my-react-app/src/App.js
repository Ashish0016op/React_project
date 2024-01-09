import "./App.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
const App=() => {
  const expenses = [
    { title: "Food", amount: 10, location: "patna_market ", date:new Date(2024,8,1) },
    { title: "Petrol", amount: 100, location: "patna_market",date:new Date(2024,9,1) },
    { title: "Movies", amount: 200, location: "patna_market",date:new Date(2024,9,1) },
  ];
  return (
    <>
      <h2>Expenses Itmes</h2>
      <Card className="CardItems">
        {expenses.map((expense, index) => (
          <ExpenseItem
            
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

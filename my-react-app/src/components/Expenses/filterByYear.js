import React from "react";
import ExpenseItem from "./ExpenseItem";
const filterByYear=(props)=>{
    const filteredExpenseYear = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === props.year;
    });
    return (
        <>
            {filteredExpenseYear.length === 0? (
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
            {filteredExpenseYear.length === 1 && (
                <h2 style={{ color: "green" }}>Add more expenses!</h2>
            )}
            
        </>
    )
}
export default filterByYear;
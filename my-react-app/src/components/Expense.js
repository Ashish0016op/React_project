import React, { useState } from 'react';
import './Expense.css';

const Expense = (props) => {
    const [enteredLocation, setLocation] = useState('');
    const [enteredDate, setDate] = useState('');
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');

    const locationHandler = (event) => {
        setLocation(event.target.value);
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const formHandler = (event) => {
        event.preventDefault();
        const expenses = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount,
            location: enteredLocation
        }
        props.onAddExpense(expenses);
        setLocation('');
        setDate('');
        setTitle('');
        setAmount('');
    }
    

    return (
        <>
            <form onSubmit={formHandler}>
                <div>Add Expenses</div>
                <label htmlFor="date">Date: </label>
                <input type="date" className="ExpenseDate" value={enteredDate} onChange={dateHandler} />
                <br></br>
                <label htmlFor="location">Location: </label>
                <input type="text" className="ExpenseLocation" value={enteredLocation} onChange={locationHandler} />
                <br></br>
                <label htmlFor="title">Title: </label>
                <input type="text" className="ExpenseTitle" value={enteredTitle} onChange={titleHandler} />
                <br></br>
                <label htmlFor="amount">Expense Amount: </label>
                <input type="number" className="ExpenseAmount" value={enteredAmount} onChange={amountHandler} />
                <br></br>
                <button type="submit">
                    Add Expense
                </button>
            </form>
        </>
    );
};

export default Expense;

import React, { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
    const locationStyle = {
        marginLeft: '60px',
        color: 'blanchedalmond',
        fontWeight: 'bold',
      };
      const [isDeleted, setIsDeleted] = useState(false);

        const deleteExpenseHandler = () => {
            setIsDeleted(true);
        };
        if (isDeleted) {
            return null;
        }
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div style={locationStyle}>{props.location}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={deleteExpenseHandler}>Delete Expense</button>
            </div>
        </div>
    );
}
export default ExpenseItem;
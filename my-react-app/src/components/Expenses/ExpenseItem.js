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
      const [title,setTitle]=useState(props.title);
      const [amount,setAmount]=useState(props.amount);
        const deleteExpenseHandler = () => {
            setIsDeleted(true);
        };
        if (isDeleted) {
            return null;
        }
        
        const UpdatTitle=()=>{
            setTitle('updated');
            console.log(title);
        }
        const UpdateAmount=()=>{
            setAmount('$100');
        }
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div style={locationStyle}>{props.location}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
                <button onClick={deleteExpenseHandler}>Delete Expense</button>
                <button onClick={UpdatTitle}>Update Title</button>
                <button onClick={UpdateAmount}>Make $100</button>
            </div>
        </div>
    );
}
export default ExpenseItem;
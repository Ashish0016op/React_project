import './ExpenseDate.css';
const ExpenseDate=(props)=>{
    const Month = props.date.getMonth() + 1;
    const day = props.date.getDate();
    const year = props.date.getFullYear();
    return(
        <div>
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}
export default ExpenseDate;
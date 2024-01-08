import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
    const locationStyle = {
        marginLeft: '60px',
        color: 'blanchedalmond',
        fontWeight: 'bold',
      };
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div style={locationStyle}>{props.location}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;
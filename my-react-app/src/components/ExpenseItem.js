import './ExpenseItem.css'
const About=()=>{
    const LocationOfExpenditure="patna_market"
    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h2>Food</h2>
                <div className="expense-item__price">Rs 10</div>
                <h2>Petrol</h2>
                <div className="expense-item__price">Rs 100</div>
                <h2>Movies</h2>
                <div className="expense-item__price">Rs 200</div>
                <h2>Location of Items</h2>
                <div>{LocationOfExpenditure}</div>
            </div>
        </div>
    );
}
export default About;
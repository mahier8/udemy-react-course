import React, {useState} from 'react';
import './DisplayExpense.css';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const DisplayExpense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>  
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>  
                {props.items.map((expense) => (
                    <ExpenseItem 
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    )
}

export default DisplayExpense;

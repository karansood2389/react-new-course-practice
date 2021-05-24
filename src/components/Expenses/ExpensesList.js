import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return (<h2 className="expenses-list__fallback">No data is available for given year.</h2>)
    }
  const expenseContent = props.items.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;

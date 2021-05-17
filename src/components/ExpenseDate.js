import './ExpenseDate.css';

function ExpenseDate(props) {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const ExpenseDate = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{ExpenseDate}</div>
    </div>
  );
}

export default ExpenseDate;

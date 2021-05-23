import {useState} from "react"

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDate = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();
  const [ month , setMonth ] = useState(expenseMonth);

  const clickHandler = () => {
    setMonth('November');
  }

  return (
    <div onClick={clickHandler} className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDate}</div>
    </div>
  );
};

export default ExpenseDate;

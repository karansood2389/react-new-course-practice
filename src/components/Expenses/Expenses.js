import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedValue, setSelectedValue] = useState("2021");
  const onValueChange = (data) => {
    setSelectedValue(data);
    setTimeout(() => {
      console.log(selectedValue);
    }, 100);
  };

  const expenses = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        valueForSelect={selectedValue}
        onValueChange={onValueChange}
      />
      {expenses}
    </Card>
  );
};

export default Expenses;

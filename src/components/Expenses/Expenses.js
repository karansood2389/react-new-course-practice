import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredValue, setFilteredValue] = useState("2021");

  const filterChangeHandler = (data) => {
    setFilteredValue(data);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => +filteredValue === +expense.date.getFullYear()
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        valueForSelect={filteredValue}
        onValueChange={filterChangeHandler}
      />
      <ExpenseChart expense={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

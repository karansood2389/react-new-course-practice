import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const showNewExpenseHandler = () => {
    setShowNewExpense((prevState) => !prevState);
  };

  const onSubmitDataHandler = (expenseData) => {
    showNewExpenseHandler();
    props.onSubmitData(expenseData);
  };
  return (
    <div className="new-expense">
      {showNewExpense && (
        <ExpenseForm
          onSubmitData={onSubmitDataHandler}
          hideNewExpenseForm={showNewExpenseHandler}
        />
      )}
      {!showNewExpense && (
        <button type="button" onClick={showNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;

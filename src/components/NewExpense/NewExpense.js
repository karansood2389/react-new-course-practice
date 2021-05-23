import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return <div className="new-expense">
      <ExpenseForm onSubmitData={props.onSubmitData}/>
  </div>;
};

export default NewExpense;

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return <div className="new-expense">
      <ExpenseForm onSubmitData={props.submitData}/>
  </div>;
};

export default NewExpense;

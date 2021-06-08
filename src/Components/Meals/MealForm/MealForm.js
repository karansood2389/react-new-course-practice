import { useRef, useState } from "react";

import Input from "../../UI/Input/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const inputRef = useRef();
  const [ amountIsValid, setAmountIsValid ] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount =
      inputRef.current.value.trim() !== "" ? +inputRef.current.value : 0;
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.addToCart(enteredAmount);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealForm;

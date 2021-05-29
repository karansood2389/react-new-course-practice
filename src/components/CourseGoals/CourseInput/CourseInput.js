import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from"./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  
  const goalInputChangeHandler = (event) => {
    setIsValidInput(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  
  const appliedStyles = `${styles['form-control']} ${!isValidInput ? styles.invalid: ''}`
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={appliedStyles}> 
        <label>Course Goal</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>  
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

{/* <FormControl className={!isValidInput ? "invalid" : ""}> */}
{/* <div className={`form-control ${!isValidInput ? "invalid" : ""}`}> */}
{/* <FormControl inValid={!isValidInput}> */}
{/* </FormControl> */}
{/* </FormControl> */}
{/* </div> */}
/*const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.inValid ? "red" : "black")}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.inValid ? "red" : "#ccc")};
    background: ${(props) => (props.inValid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`; */
// &.invalid label {
//   color: red;
// }
// &.invalid input {
//   border-color: red;
//   background: #ffd7d7;
// }

// b94f4f

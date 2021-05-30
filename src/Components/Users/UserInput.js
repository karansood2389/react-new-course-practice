import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserInput.module.sass";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onValueChange = (event, label) => {
    if (label.toLowerCase() === "username") {
      setUserName(event.target.value);
      return;
    }
    setUserAge(event.target.value);
    return;
  };

  const onButtonClick = () => {
    const enteredValue = `${userName} (${userAge} years old)`;
    const msg = checkValidity();
    props.addMember(enteredValue, msg);
    if (msg === "") {
      setUserAge("");
      setUserName("");
    }
  };

  const checkValidity = () => {
    if (userName === "" && userAge === "") {
      return {
        message: "Please enter a valid name and age (non empty values).",
        title: "Invalid input",
      };
    }

    if (+userAge <= 0) {
      return {
        message: "Please enter a valid age (>0).",
        title: "Invalid age",
      };
    }

    return {
      message: null
    };
  };

  const inputContent = props.items.map((itm) => {
    return (
      <div key={itm.name} className={styles.UserInput}>
        <label>{itm.label}</label>
        <input
          type={itm.type}
          value={itm.label.toLowerCase() === "username" ? userName : userAge}
          onChange={(event) => onValueChange(event, itm.label)}
        />
      </div>
    );
  });

  return (
    <div>
      <Card>
        {inputContent}
        <div className={styles.UserButton}>
          <Button name="Add User" onClick={onButtonClick} />
        </div>
      </Card>
    </div>
  );
};

export default UserInput;

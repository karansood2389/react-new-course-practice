import { useState } from "react";
import styles from "./App.module.sass";
import Modal from "./Components/UI/Modal";
import UserInput from "./Components/Users/UserInput";
import Users from "./Components/Users/Users";
import ErrorPopUp from "./Components/ErrorPopUp/ErrorPopup";

function App() {
  const inputParams = [
    {
      label: "Username",
      name: "nameInput",
      type: "text",
    },
    {
      label: "Age (Years)",
      name: "ageInput",
      type: "number",
    },
  ];

  const [member, setMember] = useState([]);
  const [message, setMessage] = useState({ message: null });

  const addMemberHandler = (data, msg) => {
    if (msg === "") {
      const dataShow = {
        id: Math.round(Math.random() * 1000),
        value: data,
      };
      setMember((prevState) => {
        return [...prevState, dataShow];
      });
      setMessage(msg);
      return;
    }
    setMessage(msg);
  };

  const errorPopUpHandler = () => {
    setMessage({message: null});
  };

  return (
    <div>
      <Modal show={message.message !== null}>
        <ErrorPopUp title={message.title} message={message.message} clickEvent={errorPopUpHandler} />
      </Modal>
      <div className={styles.App}>
        <UserInput items={inputParams} addMember={addMemberHandler} />
        {member.length > 0 ? <Users users={member} /> : null}
      </div>
    </div>
  );
}

export default App;

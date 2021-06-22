import { Component } from "react";
import UserFinder from "./components/UserFinder";
import UserContext from "./store/UserContext";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class App extends Component {
  render() {
    return (
      <UserContext.Provider value={{ users: DUMMY_USERS }}>
        <UserFinder />
      </UserContext.Provider>
    );
  }
}

export default App;

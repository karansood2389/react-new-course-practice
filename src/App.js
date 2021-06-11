import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParaGraph, setShowParaGraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleButtonHandler = useCallback(() => {
    if (allowToggle) {
      setShowParaGraph((showParagraph) => !showParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((allowToggle) => !allowToggle )
  }
  console.log('App Running');
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParaGraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleButtonHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

import React, { useMemo, useState } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listsTitle, setListsTitle] = useState('My List');

  const changeTitleHandler = () => {
    setListsTitle('New Lists')
  }
  console.log('App Running');
  const listItems = useMemo(() => [5,1,4,3,2], []);

  return (
    <div className="app">
      <DemoList title={listsTitle} items={listItems}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
// import React, { useCallback, useState } from "react";

// import DemoOutput from "./components/Demo/DemoOutput";

// const [showParaGraph, setShowParaGraph] = useState(false);
// const [allowToggle, setAllowToggle] = useState(false);

// const toggleButtonHandler = useCallback(() => {
//   if (allowToggle) {
//     setShowParaGraph((showParagraph) => !showParagraph);
//   }
// }, [allowToggle]);

// const allowToggleHandler = () => {
//   setAllowToggle((allowToggle) => !allowToggle )
// }

/* <DemoOutput show={showParaGraph} />
<Button onClick={allowToggleHandler}>Allow Toggle!</Button>
<Button onClick={toggleButtonHandler}>Toggle Paragraph!</Button> */
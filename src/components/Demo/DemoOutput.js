import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("Demo Running");
  return <MyParagraph show={props.show}> This is new !!</MyParagraph>;
};

export default React.memo(DemoOutput);

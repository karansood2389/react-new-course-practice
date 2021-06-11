import React, { useMemo } from "react";
import Styles from "./DemoList.module.css";

const DemoList = (props) => {

    const {items} = props
  const sortedList = useMemo(() => {
      console.log('Sorting')
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("Demo List Running");
  return (
    <div className={Styles.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);

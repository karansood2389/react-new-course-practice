import { useCallback, useEffect, useState } from "react";

const useCounter = (isPositive = true) => {
  const [counter, setCounter] = useState(0);

  const functionSwitch = useCallback((prevCounter) => {
    const value = isPositive ? 1 : -1;
    return prevCounter + value;
  }, [isPositive])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(functionSwitch);
    }, 1000);

    return () => clearInterval(interval);
  }, [functionSwitch]);

  return counter;
};

export default useCounter;

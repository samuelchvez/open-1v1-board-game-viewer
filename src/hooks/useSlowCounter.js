import { useState, useEffect } from "react";

const useSlowCounter = (stop, timeout) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < stop) {
      setTimeout(() => {
        setCount(count + 1);
      }, timeout);
    }
  }, [count, stop, timeout]);

  return count;
};

export default useSlowCounter;

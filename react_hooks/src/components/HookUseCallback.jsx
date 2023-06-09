import React, { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);
  
  const getItemsFromDB = useCallback(() => {
    return [1, 2, 3];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDB} />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <hr />
    </div>
  );
};

export default HookUseCallback;

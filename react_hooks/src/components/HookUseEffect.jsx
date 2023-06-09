import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [number, setNumber] = useState(1);

  const addOne = () => setNumber(number + 1);

  useEffect(() => {
    console.log(
      "Execução do useEffect em qualquer re-renderização do componente"
    );
  });

  useEffect(() => {
    console.log("Execução única do useEffect");
  }, []);

  useEffect(() => {
    console.log("Execução quando number é modificado");
  }, [number]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello World");
    }, 2000);
    
    //cleanup
    return () => clearTimeout(timer);
  }, [number]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={() => addOne()}>Somar 1</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;

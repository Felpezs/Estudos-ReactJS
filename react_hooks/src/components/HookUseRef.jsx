import { useRef, useState, useEffect } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current += 1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("")
    inputRef.current.focus()
  };

  return (
    <div>
      <h2>useRef</h2>
      <p>O componente renderizou {numberRef.current} vezes</p>
      <p>Counter 1: {counter}</p>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter 1</button>
      <button onClick={() => setCounterB(counterB + 1)}>Counter 2</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default HookUseRef;

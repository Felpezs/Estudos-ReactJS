import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name] = useState("Felipe");

  return (
    <div>
      <h1>Isso será exibido</h1>
      {x && <p>Se x for true</p>}
      {!x && <p>Se x for falso</p>}
      {name === 'Felipe'? (<p>O nome é Felipe</p>) : (<p>O nome não é Felipe</p>)}
    </div>
  );
};

export default ConditionalRender;

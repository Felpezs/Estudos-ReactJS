import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  const premiumNumbers = useMemo(()=>["10", "27", "32"],[]);

  useEffect(() => {
    console.log("premiumNumbers alterado");
  }, [premiumNumbers]);
  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.inlcudes(number) ? "Acertou número sorteado" : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;

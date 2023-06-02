import { useState } from "react"

export const ManageData = () => {
    const [number, setNumber] = useState(10);

  return (
    <div><div>
        <p>Valor: {number}</p>
        <button onClick={()=>setNumber(20)}>Mudar Variavel</button>
    </div></div>
  )
}

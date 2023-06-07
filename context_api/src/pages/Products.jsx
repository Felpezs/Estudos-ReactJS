import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Products = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Products</h1>
      <p>Valor: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Products;

import { useState } from "react";
import PropTypes from "prop-types";

function List({ initialItems }) {
  const [list, setList] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const removeFromList = (item) => {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== item));
    }, 500);
  };

  const addToList = () => {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  };

  return (
    <>
      <input
        placeholder="Novo item"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={(item) => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

List.propTypes = {
  initialItems: PropTypes.array,
};

export default List;

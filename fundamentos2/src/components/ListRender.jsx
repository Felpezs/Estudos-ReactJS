import { useState } from "react";

const ListRender = () => {
  const deleteRandomUser = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber)
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  const [users, setUsers] = useState([
    { id: 1, nome: "Pedro" },
    { id: 2, nome: "Matheus" },
    { id: 3, nome: "Josias" },
  ]);
  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.nome}</li>
        ))}
      </ul>
      <button onClick={deleteRandomUser}>Deletar usuário automaticamente</button>
    </div>
  );
};

export default ListRender;

import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  //Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Processamento de nome: ${name} e email: ${email}`);

    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        {/*Usando label envolvendo o input*/}
        <div>
          <label>
            <span>Email: </span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </label>
        </div>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForm;

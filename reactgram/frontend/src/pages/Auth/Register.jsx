import "pages/Auth/Auth.css";

/* ------------------------------- Components ------------------------------- */
import { Link } from "react-router-dom";

/* ---------------------------------- Hooks --------------------------------- */
import { useState, useEffect } from "react";

const handleSubmit = (e) => {
  e.preventDefault();
};

export const Register = () => {
  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem uma conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  );
};

import React from "react";
import "./GameOver.css";

const GameOver = ({ restart }) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <button onClick={restart}>Reiniciar Jogo</button>
    </div>
  );
};

export default GameOver;

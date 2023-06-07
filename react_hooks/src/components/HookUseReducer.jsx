import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTasks = [
    { id: 1, text: "Task1" },
    { id: 2, text: "Task2" },
  ];

  const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD":
    }
  };

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar numero</button>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;

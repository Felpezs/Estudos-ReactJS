import { useState } from "react";
import "./App.css";
import Hand from "./assets/hand.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import { ManageData } from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const cars = [
    { brand: "Fiat", km: 10000, color: "Vermelho" },
    { brand: "VW", km: 5000, color: "Azul" },
  ];

  function showMessage() {
    console.log("Evento do componente Pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <div>
        <h1>Avançando em react</h1>
      </div>
      <div>
        <img src="/beach.jpg" height={500} />
      </div>
      <div>
        <img src={Hand} height={500} />
      </div>
      {/*Hooks*/}
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/*Props*/}
      <ShowUserName name="Felps" />

      {/*Renderizando componentes com base em uma lista de objetos*/}
      {cars.map((car, i) => (
        <CarDetails key={i} brand={car.brand} km={car.km} color={car.color} />
      ))}

      {/*Children Props*/}
      <Container>
        <p>Children prop</p>
      </Container>

      {/*Funções como props*/}
      <ExecuteFunction myFunction={showMessage} />

      {/*State lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;

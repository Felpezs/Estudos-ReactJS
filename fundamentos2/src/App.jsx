import "./App.css";
import Hand from "./assets/hand.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import { ManageData } from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
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
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Felps"/>
      <CarDetails brand='Fiat' km={10000} color='Vermelho'/>
    </div>
  );
}

export default App;

import "./App.css";
import Hand from "./assets/hand.jpg";
import ListRender from "./components/ListRender";
import { ManageData } from "./components/ManageData";

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
    </div>
  );
}

export default App;

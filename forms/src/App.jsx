import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <MyForm user={{name: "pedro", email: "pedro@gmail.com"}}/>
    </div>
  );
}

export default App;

import "./App.css";
import Title from "./components/Title";

function App() {
  const n = 12;
  const redTitle = true;
  return (
    <div className="App">
      {/*CSS INLINE*/}
      <h1 style={{ color: "red" }}>React com css</h1>

      {/*CSS COM IF*/}
      <h1 style={n < 10 ? { color: "blue" } : { color: "pink" }}>
        CSS DINÂMICO
      </h1>

      {/*CSS COM CLASSE DINÂMICA*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter classe dinâmica
      </h2>

      {/*CSS MODULES*/}
      <Title />
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  const n = 12;
  return (
    <div className="App">
      {/*CSS INLINE*/}
      <h1 style={{ color: "red" }}>React com css</h1>

      {/*CSS COM IF*/}
      <h1 style={n<10?({color:'blue'}):({color:'pink'})}>CSS DINÂMICO</h1>
    </div>
  );
}

export default App;

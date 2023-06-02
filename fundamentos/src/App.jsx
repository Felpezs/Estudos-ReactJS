import "./App.css";
import { Challenge } from "./components/Challenge";
import FirstComponent from "./components/FirstComponent";
import { TemplateExpressions } from "./components/TemplateExpressions";
import { Events } from "./components/events";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;

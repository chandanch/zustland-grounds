import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      Zustand Grounds
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
}

export default App;

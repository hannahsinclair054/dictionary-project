import photo1 from "./photo1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
        <img src={photo1} className="photo1 img-fluid" alt="photo1" />
      </header>
    </div>
  );
}

export default App;

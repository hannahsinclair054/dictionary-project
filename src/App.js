import photo1 from "./photo1.jpg";
import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
          <img src={photo1} className="photo1 img-fluid" alt="photo1" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Hannah Sinclair</footer>
      </div>
    </div>
  );
}

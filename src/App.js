import "./App.css";
import Video from "./Video";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <div className="Video-Border">
          <div className="Video">
            <Video />
          </div>
        </div>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Hannah Sinclair</footer>
      </div>
    </div>
  );
}

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
        <footer className="App-footer">
          {" "}
          This project was coded by Hannah Sinclair and is{" "}
          <a
            href="https://github.com/hannahsinclair054/dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="GitHub-Link"
          >
            open-sourced on GitHub
          </a>{" "}
          and is{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer"
            className="Netlify-Link"
          >
            hosted on Netlify
          </a>{" "}
        </footer>
      </div>{" "}
    </div>
  );
}

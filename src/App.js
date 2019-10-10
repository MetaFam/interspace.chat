import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interspace.chat v.0</h1>
      </header>
      <div className="body">
        <div className="container">
          <div className="video"></div>
          <div className="click-zone a" data-zone="Living Room"></div>
          <div className="click-zone b" data-zone="Dining Room"></div>
          <div className="click-zone c" data-zone="Sunset Patio"></div>
          <div className="click-zone hexagon" data-zone="Portal Zone"></div>
          <img
            className="click-zone pavle"
            id="pavle"
            src="pavle.png"
            data-zone="Pavle"
          />
        </div>
        <div className="container2">
          <p>
            You're in the <span id="roomTitle">Graveyard</span>, Fucka!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

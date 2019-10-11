import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChangeRoom from "./components/ChangeRoom";
import JitsiInstance from "./components/JitsiInstance.js";
// import Click from "./components/Click";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interspace.chat v.0</h1>
        <JitsiInstance />
      </header>
    </div>
  );
}

export default App;

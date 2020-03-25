import React from "react";
import "./App.css";
import Space from "./components/Space";
import FloatingRoomWindow from "./components/FloatingRoomWindow";
import RootContextProvider from "./contexts/RootContext";

function App() {
  return (
    <div className="App">
      <RootContextProvider>
        <Space />
        <FloatingRoomWindow />
      </RootContextProvider>
    </div>
  );
}

export default App;

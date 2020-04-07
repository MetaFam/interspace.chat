import React from "react";
import "./App.css";
import Space from "./components/Space";
import FloatingRoomWindow from "./components/FloatingRoomWindow";
import RootContextProvider from "./contexts/RootContext";
import Galaxy from "./components/Galaxy";

function App() {
  return (
    <div className="App">
      <RootContextProvider>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", width: "100%", height: "150vh" }}>
            <Galaxy />
          </div>
          <Space />
          <FloatingRoomWindow />
        </div>
      </RootContextProvider>
    </div>
  );
}

export default App;

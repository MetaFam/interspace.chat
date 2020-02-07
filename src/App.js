import React from "react";
import "./App.css";
import Space from "./components/Space";
import JitsiInstance from "./components/JitsiInstance.js";
import SpaceContextProvider from "./contexts/SpaceContext";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <SpaceContextProvider>
          <Space />
          <div className="meetContainer">
            <JitsiInstance />
          </div>
        </SpaceContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;

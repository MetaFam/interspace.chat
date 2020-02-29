import React from "react";
import "./App.css";
import Space from "./components/Space";
import RoomWindow from "./components/RoomWindow";
import SpaceContextProvider from "./contexts/SpaceContext";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <SpaceContextProvider>
          <Space />
          <RoomWindow/>
        </SpaceContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;

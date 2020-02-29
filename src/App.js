import React from "react";
import "./App.css";
import Space from "./components/Space";
import RoomWindow from "./components/RoomWindow";
import FloatingRoomWindow from "./components/FloatingRoomWindow";
import RootContextProvider from "./contexts/RootContext";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <RootContextProvider>
          <Space />
          <RoomWindow/>
          <FloatingRoomWindow/>
        </RootContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;

import React, { createContext, useState } from "react";

export const UserContext = createContext([{}, () => {}]);

const UserContextProvider = props => {
  const [user, setUsername] = useState("MetaGamer");

  return (
    <UserContext.Provider value={{ user, setUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

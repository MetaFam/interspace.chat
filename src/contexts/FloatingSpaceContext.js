import React, { createContext, useState } from "react";

export const FloatingSpaceContext = createContext([{}, () => {}]);

const FloatingSpaceContextProvider = props => {
  const [currentFloatingSpaces, setFloatingSpaces] = useState([]);
  return (
    <FloatingSpaceContext.Provider value={{ currentFloatingSpaces, setFloatingSpaces }}>
      {props.children}
    </FloatingSpaceContext.Provider>
  );
};

export default FloatingSpaceContextProvider;

import React, { createContext, useState } from "react";

export const FloatingSpaceContext = createContext([{}, () => {}]);

const FloatingSpaceContextProvider = props => {
  const [currentFloatingSpace, setFloatingSpace] = useState(null);
  return (
    <FloatingSpaceContext.Provider value={{ currentFloatingSpace, setFloatingSpace }}>
      {props.children}
    </FloatingSpaceContext.Provider>
  );
};

export default FloatingSpaceContextProvider;

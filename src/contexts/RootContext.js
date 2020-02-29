import React from "react";

import SpaceContextProvider from "./SpaceContext";
import FloatingSpaceContextProvider from "./FloatingSpaceContext";

const RootContextProvider = props => {
    return (
      <SpaceContextProvider>
          <FloatingSpaceContextProvider>
            {props.children}
          </FloatingSpaceContextProvider>
      </SpaceContextProvider>
    );
};
  
export default RootContextProvider;
import React from "react";

import UserContextProvider from "./UserContext";
import FloatingSpaceContextProvider from "./FloatingSpaceContext";

const RootContextProvider = props => {
    return (
        <UserContextProvider>
            <FloatingSpaceContextProvider>
                {props.children}
            </FloatingSpaceContextProvider>
        </UserContextProvider>
    );
};
  
export default RootContextProvider;
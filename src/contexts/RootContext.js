import React from "react";

import UserContextProvider from "./UserContext";
import SpaceContextProvider from "./SpaceContext";
import FloatingSpaceContextProvider from "./FloatingSpaceContext";

const RootContextProvider = props => {
    return (
        <UserContextProvider>
            <SpaceContextProvider>
                <FloatingSpaceContextProvider>
                    {props.children}
                </FloatingSpaceContextProvider>
            </SpaceContextProvider>
        </UserContextProvider>
    );
};
  
export default RootContextProvider;
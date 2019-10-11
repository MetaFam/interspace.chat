import React, { Component, createContext } from "react";

export const SpaceContext = createContext();

class SpaceContextProvider extends Component {
  state = {
    currentSpace: "graveyard"
  };
  render() {
    return (
      <SpaceContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SpaceContext.Provider>
    );
  }
}

export default SpaceContextProvider;

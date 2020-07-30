import React from "react";

import RouterView from "./Router"

import GlobalStateProvider from "./context/globalState"

import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <GlobalStateProvider>
        <RouterView />
      </GlobalStateProvider>
    </React.Fragment>

  )
}

export default App;

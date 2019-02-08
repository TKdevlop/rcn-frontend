import React, { Component } from "react";
import AppBar from "./AppBar";
import Panels from "./Panels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Panels />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import Navigation from "./components/navbar";
import CV from "./containers/cv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main_container">
        <Navigation title="Farrah Lord-Newcombe" />
        <CV />
      </div>
    );
  }
}

export default App;

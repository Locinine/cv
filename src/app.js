import React, { Component } from "react";

// import Navigation from "./components/navbar";
import SideNav from "./components/sidenav";
import CV from "./containers/cv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: null };

    _.bindAll(this, ["updateWindowDimensions"]);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
    console.log("window.innerWidth: ", window.innerWidth);
  }

  render() {
    return (
      <div className="main_container">
        {/* <Navigation title="Farrah Lord-Newcombe" /> */}
        <SideNav />
        <CV screenWidth={this.state.screenWidth} />
      </div>
    );
  }
}

export default App;

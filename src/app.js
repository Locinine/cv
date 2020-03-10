import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import _ from "lodash";

// import Navigation from "./components/navbar";
import SideNav from "./components/sidenav";
import About from "./containers/about";
import CV from "./containers/cv";
import Projects from "./containers/projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: null,
      mobileBrowser: false
    };

    _.bindAll(this, ["handleResize"]);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    this.setState({
      windowWidth: window.innerWidth,
      mobileBrowser: isMobile
    });
  }

  render() {
    const { windowWidth, mobileBrowser } = this.state;
    return (
      <div className="main_container">
        {/* <Navigation title="Farrah Lord-Newcombe" /> */}
        <SideNav />
        <Switch>
          <Route exact path={"/"} component={About} />
          <Route
            path="/cv"
            render={props => (
              <CV
                {...props}
                windowWidth={windowWidth}
                isMobile={mobileBrowser}
              />
            )}
          />
          <Route path={"/projects"} component={Projects} />
          {/* redirect user to About page if route does not exist */}
          <Route component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;

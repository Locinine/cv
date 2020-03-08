import React, { Component } from "react";
import SideNav, {
  //   Toggle,
  //   Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class SideNav2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SideNav
        className="position-fixed"
        // onSelect={selected => {
        //   // Add your code here
        // }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="about">
          <NavItem eventKey="about">
            <NavIcon>
              <i className="flaticon-about"></i>
            </NavIcon>
            <NavText>About</NavText>
          </NavItem>
          <NavItem eventKey="projects">
            <NavIcon>
              <i className="flaticon-projects"></i>
            </NavIcon>
            <NavText>Projects</NavText>
          </NavItem>
          <NavItem eventKey="cv">
            <NavIcon>
              <i className="flaticon-resume"></i>
            </NavIcon>
            <NavText>CV</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNav2;

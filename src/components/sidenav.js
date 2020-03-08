import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { useHistory } from "react-router-dom";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const SideNav2 = () => {
  let history = useHistory();

  let currentPath = location.pathname.split("/")[1];
  let defaultPath = !currentPath ? "about" : currentPath;

  return (
    <SideNav
      className="position-fixed"
      onSelect={selected => {
        const pageName = selected != "about" ? selected : "";
        const newPath = "/" + pageName;
        if (location.pathname !== newPath) {
          console.log("newPath: ", newPath);
          history.push(newPath);
        }
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={defaultPath}>
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
};

export default SideNav2;

import React from "react";
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ title }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#features">CV</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Navigation.propTypes = {
  title: PropTypes.string,
};

export default Navigation;
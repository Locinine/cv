import React from "react";
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

const Nav = ({ title }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
       {title}
    </Navbar.Brand>
  </Navbar>
);

Nav.propTypes = {
  title: PropTypes.string,
};

export default Nav;
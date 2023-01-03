import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Offcanvas } from "react-bootstrap";
import { screenSizes } from "../constants";
import { LinkContainer } from "react-router-bootstrap";
import { GrFormClose } from "react-icons/gr";

import "./styles/navbar.scss";

interface NavigationProps {
  title: string;
}

const Navigation: React.FC<NavigationProps> = ({ title }) => {
  const [navOpen, setNavOpen] = useState<Boolean>(false);
  const currentBraekpoint = window.innerWidth >= screenSizes.md;

  const toggleNavbar = () => setNavOpen(!navOpen);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand={currentBraekpoint}
      // className="mb-3"
      onSelect={toggleNavbar}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <h2>{title}</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-xs`}
          onClick={toggleNavbar}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xs`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
          placement="end"
          show={navOpen}
        >
          <Offcanvas.Header>
            <div className="w-100 d-flex flex-row-reverse">
              <Button variant="light" size="sm" onClick={toggleNavbar}>
                <GrFormClose />
              </Button>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to="/">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cv">
                <Nav.Link>CV</Nav.Link>
              </LinkContainer>
              <Nav.Item>
                <Button variant="outline-secondary" size="sm">
                  Download CV
                </Button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;

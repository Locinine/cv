import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Button, Container, Offcanvas } from "react-bootstrap";
import { screenSizes } from "../constants";
import { LinkContainer } from "react-router-bootstrap";
import { GrFormClose } from "react-icons/gr";
// import { exportPDF } from "../utils";
import { useReactToPrint } from "react-to-print";

import "./styles/navbar.scss";

interface NavigationProps {
  title: string;
  cvRef: React.RefObject<HTMLDivElement>;
}

const Navigation: React.FC<NavigationProps> = ({ title, cvRef }) => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState<Boolean>(false);
  const [background, setBackground] = useState<string>("transparent");
  const shouldExpand = window.innerWidth >= screenSizes.md;

  const onScroll = () => {
    if (window.scrollY > 50) {
      setBackground("dark");
    } else {
      setBackground("transparent");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setBackground("transparent");
      window.addEventListener("scroll", onScroll);
    } else if (background !== "dark") {
      setBackground("dark");
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  const toggleNavbar = () => setNavOpen(!navOpen);

  const exportPDF = useReactToPrint({
    content: () => cvRef.current,
  });

  return (
    <Navbar
      bg={background}
      variant="dark"
      expand={shouldExpand}
      sticky="top"
      onSelect={() => {
        if (!shouldExpand) {
          toggleNavbar();
        }
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          className={shouldExpand ? "position-absolute" : ""}
        >
          <h4>{title}</h4>
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
            <Nav
              className={
                shouldExpand
                  ? "flex-grow-1 pe-3"
                  : "justify-content-between flex-grow-1 pe-3"
              }
            >
              <div className={shouldExpand ? "d-flex m-auto" : ""}>
                <LinkContainer to="/cv/home">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cv/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cv/cv">
                  <Nav.Link>CV</Nav.Link>
                </LinkContainer>
              </div>
              {/* <Nav.Item>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={exportPDF}
                >
                  Download CV
                </Button>
              </Nav.Item> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;

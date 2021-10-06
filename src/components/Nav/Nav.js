import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Navb from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./nav.css";
import resume from "../../assets/resume.pdf";

const Nav = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      variant="dark"
      className="nav-style nav-transition justify-content-between"
    >
      <Container>
        <Navbar.Brand>
          Brian Mirabito <span className="sub-title"> Software Engineer</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navb className="ml-auto">
            <Navb.Link href={resume} rel="noopener noreferrer" target="_blank">
              Resume
            </Navb.Link>
            <Navb.Link
              href="https://github.com/brianmirabito"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </Navb.Link>
          </Navb>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;

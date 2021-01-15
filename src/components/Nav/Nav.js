import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Navb from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./nav.css";

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
        <Navbar.Brand href="#home">
          Brian Mirabito <span className="sub-title"> Software Engineer</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navb className="ml-auto">
            <Navb.Link href="#features">Resume</Navb.Link>
            <Navb.Link href="#pricing">Github</Navb.Link>
            <Navb.Link href="#pricing">Contact Me</Navb.Link>
          </Navb>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;

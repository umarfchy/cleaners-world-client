import React from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navAlignOnMob = "mx-auto";
  return (
    <Navbar
      className="justify-content-between mx-3"
      bg="white"
      variant="light"
      expand="lg"
    >
      <Navbar.Brand href="#home">Cleaner's World</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className={navAlignOnMob} href="#home">
            Home
          </Nav.Link>
          <Nav.Link className={navAlignOnMob} href="#services">
            Our Services
          </Nav.Link>
          <Nav.Link className={navAlignOnMob} href="#reviews">
            Reviews
          </Nav.Link>
          <Nav.Link className={navAlignOnMob}>
            <Link className="navAnchors" to="/admin">
              Admin
            </Link>
          </Nav.Link>
          <Nav.Link className={navAlignOnMob} href="#dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link className={navAlignOnMob} href="#about">
            About
          </Nav.Link>
          <Nav.Link className={navAlignOnMob} href="#contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

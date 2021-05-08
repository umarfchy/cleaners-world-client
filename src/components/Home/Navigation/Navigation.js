import React from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      style={{
        margin: "0 1.5rem",
      }}
      bg="light"
      expand="lg"
    >
      <Navbar.Brand href="#home">Cleaner's World</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Our Services</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
          <Nav.Link>
            <Link className="navAnchors" to="/admin">
              Admin
            </Link>
          </Nav.Link>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

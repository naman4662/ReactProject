import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="mainNav">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/cities">Cities</Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Header;

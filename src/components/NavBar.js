import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import logo from "../photos/logo.jpg";
import logo from "../photos/logo2.jpg";
import { useTranslation } from "react-google-multi-lang";
import "./styles.css";
import Austraila from "../photos/australia.png";
import Korea from "../photos/south-korea.png";

const NavBar = () => {
  const { setLanguage } = useTranslation();
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container className="container">
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="Logo" className="logo" />
          {/* <img
            src={ganpan2}
            alt="ganpan"
            style={{ width: "200px", borderRadius: "30px" }}
          /> */}
        </Navbar.Brand>
        <Nav className="nav-link">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/review">
            Review
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/faqs">
            FAQS
          </Nav.Link>
          <Button variant="dark" as={Link} to="/booking">
            Book Online
          </Button>
        </Nav>
        <div className="ml-auto language-switcher">
          <img
            src={Austraila}
            alt="australian flag"
            className="flag-icon"
            onClick={() => setLanguage("en")}
          />

          <img
            src={Korea}
            alt="Korean flag"
            className="flag-icon"
            onClick={() => setLanguage("ko")}
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;

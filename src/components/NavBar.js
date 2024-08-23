import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../photos/logo2.jpg";
import { useTranslation } from "react-i18next";
import Australia from "../photos/australia.png";
import Korea from "../photos/south-korea.png";
import "./styles/NavBar.css";

const NavBar = () => {
  const { i18n } = useTranslation();

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <div className="nav-container">
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-link">
            <Nav.Link as={Link} to="/home">
              {/* {t("navbar.home")} */}Home
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              {/* {t("navbar.gallery")} */}Gallery
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/review">
              {t("navbar.review")}Review
            </Nav.Link> */}
            <Nav.Link as={Link} to="/review-phone">
              {/* {t("navbar.review")} */}Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {/* {t("navbar.contact")} */}Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs">
              {/* {t("navbar.faqs")} */}FAQS
            </Nav.Link>

            <button
              variant="dark"
              className="booking-button"
              as={Link}
              to="/booking"
            >
              Book Online
            </button>

            <div className="language-switcher">
              <img
                src={Australia}
                alt="Australian flag"
                className="flag-icon"
                onClick={() => i18n.changeLanguage("en")}
              />
              <img
                src={Korea}
                alt="Korean flag"
                className="flag-icon"
                onClick={() => i18n.changeLanguage("ko")}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;

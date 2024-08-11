import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../photos/logo2.jpg";
import { useTranslation } from "react-i18next";
import "./styles.css";
import Australia from "../photos/australia.png";
import Korea from "../photos/south-korea.png";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              {t("navbar.gallery")}
            </Nav.Link>
            <Nav.Link as={Link} to="/review">
              {t("navbar.review")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("navbar.contact")}
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs">
              {t("navbar.faqs")}
            </Nav.Link>
            <Nav.Item>
              <Button variant="dark" as={Link} to="/booking">
                Book Online
              </Button>
            </Nav.Item>
          </Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

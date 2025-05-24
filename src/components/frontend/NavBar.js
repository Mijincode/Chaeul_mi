import React from "react";
import { motion } from "framer-motion";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../photos/logoNavbar.png";
import { useTranslation } from "react-i18next";
import Australia from "../../photos/australia.png";
import Korea from "../../photos/south-korea.png";
import "./styles/NavBar.css";

const NavBar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <Navbar className="navbar">
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
              {/* {t("navbar.home")} */}
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              {/* {t("navbar.gallery")} */} {t("navbar.gallery")}
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/review">
              {t("navbar.review")}Review
            </Nav.Link> */}
            <Nav.Link as={Link} to="/review-phone">
              {/* {t("navbar.review")} */} {t("navbar.review")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us">
              {/* {t("navbar.about")} */} {t("navbar.aboutUs")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {/* {t("navbar.contact")} */} {t("navbar.contact")}
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs">
              {/* {t("navbar.faqs")} */} {t("navbar.faqs")}
            </Nav.Link>

            {/* <a
              className="booking-button"
              href="https://open.kakao.com/o/sJVFkuT"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.button")}
            </a> */}

            <motion.a
              href="https://open.kakao.com/o/sJVFkuT"
              target="_blank"
              className="booking-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("navbar.button")}
            </motion.a>

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

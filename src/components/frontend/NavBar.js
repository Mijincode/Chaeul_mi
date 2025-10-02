import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../photos/logo10.png";
import Australia from "../../photos/australia.png";
import Korea from "../../photos/south-korea.png";
import "./styles/NavBar.css";

export default function NavBar() {
  const { i18n, t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setExpanded(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      className="navbar"
      expand="lg"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <div className="nav-container">
        <Navbar.Brand
          as={Link}
          to="/home"
          onClick={closeMenu}
          className="brand"
        >
          <img src={logo} alt="채울美" className="brand-logo" />
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle aria-controls="primary-nav" className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="primary-nav" className="nav-collapse">
          <Nav className="navbar-link">
            <Nav.Link as={Link} to="/home" onClick={closeMenu}>
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={closeMenu}>
              {t("navbar.gallery")}
            </Nav.Link>
            <Nav.Link as={Link} to="/review-phone" onClick={closeMenu}>
              {t("navbar.review")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={closeMenu}>
              {t("navbar.aboutUs")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
              {t("navbar.contact")}
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs" onClick={closeMenu}>
              {t("navbar.faqs")}
            </Nav.Link>

            <motion.a
              href="https://open.kakao.com/o/sJVFkuT"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={closeMenu}
            >
              {t("navbar.button")}
            </motion.a>

            <div
              className="language-switcher"
              role="group"
              aria-label="Language"
            >
              <img
                src={Australia}
                alt="English"
                className="flag-icon"
                onClick={() => {
                  i18n.changeLanguage("en");
                  closeMenu();
                }}
              />
              <img
                src={Korea}
                alt="한국어"
                className="flag-icon"
                onClick={() => {
                  i18n.changeLanguage("ko");
                  closeMenu();
                }}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

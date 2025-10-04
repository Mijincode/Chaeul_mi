import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import naverLogo from "../../photos/naverLogo.png";
import logo from "../../photos/logo10.png";
import logo2 from "../../photos/logoNavbar.png";
import "./styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* 1) Intro / logos / text */}
        <div className="footer-introdution">
          <div className="logo-wrapper">
            <img src={logo} alt="채울美" className="footer-logo" />
            <img src={logo2} alt="채울 美 로고" className="footer-logo2" />
          </div>

          <p className="footer-text">{t("footer.aboutUsContent")}</p>
        </div>

        {/* 2) Quick links */}
        <nav className="footer-section footer-links" aria-label="Quick Links">
          <h6 className="footer-title">{t("footer.supportResources")}</h6>
          <div className="footer-links-list">
            <Link to="/home" className="footer-link">
              {t("navbar.home")}
            </Link>

            <Link to="/gallery" className="footer-link">
              {t("navbar.gallery")}
            </Link>

            <Link to="/review-phone" className="footer-link">
              {t("navbar.review")}
            </Link>

            <Link to="/about-us" className="footer-link">
              {t("navbar.aboutUs")}
            </Link>

            <Link to="/contact" className="footer-link">
              {t("navbar.contact")}
            </Link>

            <Link to="/faqs" className="footer-link">
              FAQS
            </Link>
          </div>
        </nav>

        <div className="footer-section">
          <h6 className="footer-title">{t("footer.contact")}</h6>

          <div className="footer-icons">
            <a
              href="https://www.instagram.com/chaeul_mi/"
              className="footer-icon-link"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="instaIcon" />
            </a>
            <a
              href="https://blog.naver.com/l8238076"
              className="footer-icon-link"
              aria-label="Naver Blog"
            >
              <img src={naverLogo} alt="Naver Logo" className="naver-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2024 Copyright: 채울_美</div>
    </footer>
  );
};

export default Footer;

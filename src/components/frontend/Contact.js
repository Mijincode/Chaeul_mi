import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import kakaotalk from "../../photos/kakao-talk1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import markerImage from "../../photos/marker.png";
import "./styles/Contact.css";

const directions = require.context("../../photos/directions", true);
const getDirectionsImages = directions.keys().map(directions);

const Contact = () => {
  const { t } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % getDirectionsImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? getDirectionsImages.length - 1 : prev - 1
    );
  };

  const openZoomedImage = (image) => setZoomedImage(image);
  const closeZoomedImage = () => setZoomedImage(null);

  return (
    <div className="contact-container">
      <h3 className="contact-title">{t("contact.title")}</h3>

      <div className="custom-slider">
        <button className="arrow left" onClick={prevImage}>
          ‹
        </button>
        <div className="slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={getDirectionsImages[currentIndex]}
              alt={`slide-${currentIndex}`}
              className="animated-slide-image"
              onClick={() => openZoomedImage(getDirectionsImages[currentIndex])}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
        <button className="arrow right" onClick={nextImage}>
          ›
        </button>
      </div>

      <div className="location-hours">
        <div className="map-container">
          <h5 className="address-title">
            <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
            {t("contact.chaeulmi-address")}
          </h5>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1069.2141608253135!2d127.26046764010509!3d36.48833163187254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1746147346091!5m2!1sen!2sau"
              className="map-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map location"
            ></iframe>

            <img src={markerImage} alt="marker" className="marker-img" />
          </div>
        </div>

        <div className="trading-container">
          <div className="trading-hours">{t("contact.tradingHours")}</div>
          <div className="trading-days-times">
            <div className="days">
              <div>{t("contact.monday")}</div>
              <div>{t("contact.tuesday")}</div>
              <div>{t("contact.wednesday")}</div>
              <div>{t("contact.thursday")}</div>
              <div>{t("contact.friday")}</div>
              <div>{t("contact.saturday")}</div>
            </div>
            <div className="times">
              <div>{t("contact.tenToFour")}</div>
              <div>{t("contact.tenToFour")}</div>
              <div>{t("contact.tenToSeven")}</div>
              <div>{t("contact.tenToFour")}</div>
              <div>{t("contact.tenToSeven")}</div>
              <div>{t("contact.tenToFour")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="consultation">
        <h4 className="consultation-title">| {t("contact.consultation")}</h4>
        <div className="kakao-link">
          {t("contact.kakaoTalk")}
          <a
            className="text-reset fw-bold"
            href="https://open.kakao.com/o/sJVFkuT"
            aria-label={t("contact.kakaoContact")}
          >
            <img
              src={kakaotalk}
              alt={t("contact.kakaoIconAlt")}
              className="icon"
            />
          </a>
        </div>
      </div>

      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <img src={zoomedImage} alt="zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default Contact;

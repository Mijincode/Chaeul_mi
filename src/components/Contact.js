import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import NaverMap from "../photos/map.png";
import kakaotalk from "../photos/kakao-talk1.png";
import GoogleMapComponent from "./GoogleMapComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./styles/Contact.css";

const directions = require.context("../photos/directions", true);
const getDirectionsImages = directions.keys().map(directions);

const Contact = () => {
  const { t } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState(null);

  const center = { lat: 36.48883849333951, lng: 127.26052669020419 };
  const zoom = 15;
  const marker = { key: "chaeulmi" };

  const openZoomedImage = (image) => {
    setZoomedImage(image);
  };
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="contact-container">
      <h3 className="contact-title">{t("contact.title")}</h3>{" "}
      <h5 className="chaeulmi-address">
        {" "}
        <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
        {t("contact.chaeulmi-address")}
      </h5>
      <div className="slide-container">
        <Slider {...settings}>
          {getDirectionsImages.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`direction-${idx}`}
              className="slide-image"
              onClick={() => openZoomedImage(image)}
            />
          ))}
        </Slider>
      </div>
      <GoogleMapComponent center={center} zoom={zoom} marker={marker} />
      <div className="consultation">
        <div className="consultation-left">
          <h4 className="texts">| {t("home.tradingHours")} </h4>
        </div>
        <div className="consultation-right">
          <div className="home-tradingHours-time">
            <li> {t("home.tradingHours-time")}</li>
          </div>
        </div>
        {/* <img
          className="naver-map"
          src={NaverMap}
          alt="Naver Map"
          onClick={() => openZoomedImage(NaverMap)}
        /> */}
      </div>
      <div className="consultation">
        <div className="consultation-left">
          <h4 className="texts">| {t("contact.consultation")}</h4>
        </div>
        <div className="consultation-right">
          <div className="kakao-link">
            <li>
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
            </li>
          </div>

          <div className="contact-phone">
            {" "}
            <li> {t("contact.phone-number")} </li>
          </div>
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

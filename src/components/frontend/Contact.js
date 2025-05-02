import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import kakaotalk from "../../photos/kakao-talk1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import markerImage from "../../photos/marker.png";
import "./styles/Contact.css";

const directions = require.context("../../photos/directions", true);
const getDirectionsImages = directions.keys().map(directions);

const Contact = () => {
  const { t } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState(null);

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
      <div
        style={{
          position: "relative",
          width: "80%",
          height: "450px",
          margin: "0 auto",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1069.2141608253135!2d127.26046764010509!3d36.48833163187254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1746147346091!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map location"
        ></iframe>
        <img
          src={markerImage}
          alt="marker"
          style={{
            position: "absolute",
            top: "36%",
            left: "52%",
            transform: "translate(-50%, -100%)",
            width: "30px",
          }}
        />
      </div>
      <div className="consultation">
        <div className="consultation-left">
          <h4 className="texts">| {t("home.tradingHours")} </h4>
        </div>
        <div className="consultation-right">
          <div className="home-tradingHours-time">
            <li> {t("home.tradingHours-time")}</li>
          </div>
        </div>
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

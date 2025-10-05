import React from "react";
import { useTranslation } from "react-i18next";
import kakaotalk from "../../photos/kakao-talk1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import facility from "../../photos/shop/entrance.png";
import "./styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <h3 className="contact-title">{t("contact.title")}</h3>
      <div className="facility-wrapper">
        <img className="facility" src={facility} alt="facility" />
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

      <div className="cta-wrap">
        <a
          href="https://open.kakao.com/o/sJVFkuT"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
          aria-label="카카오톡으로 무료 상담하기"
        >
          <img src={kakaotalk} alt="" className="cta-icon" />
          {t("contact.consultation")}
        </a>
      </div>
    </div>
  );
};

export default Contact;

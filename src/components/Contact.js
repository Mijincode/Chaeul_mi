import React from "react";
import { useTranslation } from "react-i18next";
import map from "../photos/map.png";
import kakaotalk from "../photos/kakaotalk.png";
import "./styles.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t("contact.address")}</h3>
      <img className="map" src={map} alt={t("contact.mapAlt")} />
      <a
        href="https://maps.app.goo.gl/CiSc5huQ8eq5L2398"
        aria-label={t("contact.viewOnGoogleMaps")}
      >
        {t("contact.viewOnGoogleMaps")}
      </a>

      <p className="me-3">
        {t("contact.kakaoInquiry")}
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
      </p>
    </div>
  );
};

export default Contact;

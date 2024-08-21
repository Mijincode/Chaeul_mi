import React from "react";
import { useTranslation } from "react-i18next";
import map from "../photos/map.png";
import kakaotalk from "../photos/kakaotalk.png";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";

import "./styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = "5bfa600c7be908eb";

  return (
    <div>
      <h3 className="contact-title">{t("contact.title")}</h3>
      <div className="contact-container">
        <img className="naver-map" src={map} alt={t("contact.mapAlt")} />
        <div>
          <Map
            apiKey={apiKey}
            zoom={13}
            center={{ lat: 36.49020337038061, lng: 127.25945066163874 }}
            className="map"
            mapId={mapId}
          >
            <AdvancedMarker
              position={{ lat: 36.49020337038061, lng: 127.25945066163874 }}
              title="채울미"
            />
          </Map>
        </div>
      </div>
      <div className="kakao-container">
        <div className="kakao-link">
          <p>{t("contact.kakaoTalkContact")} </p>
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
    </div>
  );
};

export default Contact;

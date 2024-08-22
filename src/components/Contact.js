import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import map from "../photos/map.png";
import kakaotalk from "../photos/kakaotalk.png";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { AdvancedMarker } from "@vis.gl/react-google-maps";

import "./styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [map, setMap] = useState(null);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const center = { lat: 36.48883849333951, lng: 127.26052669020419 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(36.488829, 127.2604), // Southwest corner
      new window.google.maps.LatLng(36.48885, 127.2608) // Northeast corner
    );
    map.fitBounds(bounds); // Fit bounds to the map
    map.setZoom(7); // Set zoom level to show a larger area
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      <h3 className="contact-title">{t("contact.title")}</h3>
      <div className="contact-container">
        <img className="naver-map" src={map} alt={t("contact.mapAlt")} />
        <div className="googleMap-container">
          {isLoaded ? (
            <GoogleMap
              center={center}
              Zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
              zIndex="modal"
              mapContainerStyle={{ width: "400px", height: "400px" }}
            >
              <AdvancedMarker position={center} title="채울미" />

              {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
          ) : (
            <div>Loading...</div> // Optional: Display a loading message
          )}
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

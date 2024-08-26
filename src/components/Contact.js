import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
// import NaverMap from "../photos/map.png";
import kakaotalk from "../photos/kakao-talk1.png";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Pin } from "@vis.gl/react-google-maps";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/Contact.css";

const directions = require.context("../photos/directions", true);

const getDirectionsImages = () => {
  return directions.keys().map(directions);
};

const Contact = () => {
  const { t } = useTranslation();
  const images = getDirectionsImages();
  const [zoomedImage, setZoomedImage] = useState(null);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const center = { lat: 36.48883849333951, lng: 127.26052669020419 };
  const marker = { key: "chaeulmi" };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(36.484034, 127.2602414), // Southwest corner
      new window.google.maps.LatLng(36.48927693178, 127.260521) // Northeast corner
    );
    map.fitBounds(bounds);
    map.setZoom(7);
  }, []);

  const onUnmount = React.useCallback(function callback() {}, []);

  const openZoomedImage = (image) => {
    setZoomedImage(image);
  };
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="contact-container">
      <h3 className="contact-title">{t("contact.title")}</h3>
      <div className="slide-container">
        <Slider {...settings}>
          {images.map((image, idx) => (
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
      <div className="map-name">
        <h5 className="naver-map-title">
          <ul>
            <li>{t("contact.chaeulmi-address")}</li>
            <li> {t("home.tradingHours-time")} </li>
          </ul>
        </h5>
        {/* <img
          className="naver-map"
          src={NaverMap}
          alt="Naver Map"
          onClick={() => openZoomedImage(NaverMap)}
        /> */}
      </div>
      <div className="googleMap-container">
        {/* <h5 className="map-name"> Google Map</h5> */}
        {isLoaded ? (
          <GoogleMap
            center={center}
            Zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
            zIndex="modal"
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            options={{
              mapTypeControl: false,
            }}
          >
            <AdvancedMarker key={marker.key} position={center} title="채울미">
              <Pin
                background={"#FBBC04"}
                glyphColor={"#000"}
                borderColor={"#000"}
              />
            </AdvancedMarker>
            {/* <Marker position={center} /> */}
            {/* Child components, such as markers, info windows, etc. */}
          </GoogleMap>
        ) : (
          <div>Loading...</div> // Optional: Display a loading message
        )}
      </div>

      <div className="consultation">
        <div className="kakao-link">
          <p className="kakaotalk">{t("contact.kakaoTalkContact")} </p>

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

        <div className="contact-phone">
          {" "}
          {t("contact.chaeulmi-phone")}: {t("contact.phone-number")}{" "}
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

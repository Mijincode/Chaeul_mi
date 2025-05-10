import React, { useState } from "react";
import mikyung from "../../photos/founder.jpg";
import homepage from "../../photos/homepage2.jpg";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import "./styles/Home.css";

const getFacilityImages = require.context("../../photos/shop/facility/", true);
const facilityImages = getFacilityImages.keys().map(getFacilityImages);

const Home = () => {
  const { t } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState(null);

  const openZoomedImage = (facilityImages) => {
    setZoomedImage(facilityImages);
  };
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <section className="home-section">
      <Container className="home-container">
        {/* Homepage Section */}
        <div className="homepage-wrapper">
          <img className="homepage" src={homepage} alt="home" />
          <div className="homepage-text">
            <h1>{t("home.welcome")}</h1>
          </div>
          <div>
            <h3 className="homepage-text2">
              {t("home.sejongSpecialty")}
              <Button
                variant="light"
                href="https://open.kakao.com/o/sJVFkuT"
                target="_blank"
                className="home-button"
              >
                {t("home.bookingButton")}
              </Button>
            </h3>
          </div>
        </div>
        {/* About Section */}
        <h2 className="about">{t("home.about")}</h2>
        <div className="mikyung-container">
          <div className="mikyung-content">
            <img className="mikyung" src={mikyung} alt="mikyung" />
            <div className="title">
              <h4 className="introduction">{t("home.introduction")}</h4>
              <p className="introduction-mikyung">{t("home.beautyShop")}</p>
              {/* <h4 className="introduction">{t("home.semiPermanentMakeup")}</h4> */}
              <div className="list-container">
                <div className="list">
                  <div className="list-title">
                    {t("home.semiPermanentMakeup")}
                  </div>
                  <ul className="lists">
                    <li className="list-item">{t("home.eyebrows")}</li>
                    <li className="list-item"> {t("home.lips")}</li>
                    <li className="list-item">{t("home.eyeliner")}</li>
                    <li className="list-item">{t("home.hairline")}</li>
                    <li className="list-item">{t("home.scalpTattoo")}</li>
                  </ul>
                </div>
                {/* <div className="list">
                  <div className="list-title">{t("home.curlPerm")}</div>
                  <ul>
                    <li>{t("home.eyelashPerm")}</li>
                  </ul>
                </div> */}
                {/* <div className="list">
                  <div className="list-title">
                    {t("home.cleanPediPlanning")}
                  </div>
                  <ul>
                    <li>{t("home.footCallus")}</li>
                  </ul>
                </div> */}
              </div>
              <div className="message">
                <p className="text-lg">{t("home.callToAction")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Section */}
        <div className="facility-section">
          <h2 className="facility-title">{t("home.facilityTitle")}</h2>

          <div className="facility-container">
            {facilityImages.map((src, index) => (
              <div
                key={index}
                className="facility-image-wrapper"
                onClick={() => openZoomedImage(src)}
              >
                <img
                  className="facility-images"
                  src={src}
                  alt={`facility-${index}`}
                  layout="fill"
                />
              </div>
            ))}
            {zoomedImage && (
              <div
                className="zoomed-image-container"
                onClick={closeZoomedImage}
              >
                <img
                  className="zoomed-image"
                  src={zoomedImage}
                  alt="zoomed-image"
                />
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* TradingHour Section */}
      <section className="section-container">
        <div className="trading-hour">
          <div className="trading-hour-text">
            <div className="trading-hour-left">{t("home.tradingHours")}</div>
            <ul className="trading-hour-right">
              <li>{t("booking.availableHoursFive")}</li>
              <li>{t("booking.availableHoursSeven")}</li>
            </ul>
          </div>
          <div className="trading-hour-button">
            <Button
              variant="dark"
              href="https://open.kakao.com/o/sJVFkuT"
              target="_blank" // Optional: This ensures the link opens in a new tab
              className="bottom-button"
            >
              {t("home.bookingButton")}
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;

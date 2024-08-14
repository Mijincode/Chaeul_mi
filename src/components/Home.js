import React from "react";
import mikyung from "../photos/mikyung.jpg";
import homepage from "../photos/homepage2.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import "./styles/Home.css";

const getFacilityImages = require.context("../photos/shop/facility/", true);
const facilityImages = getFacilityImages.keys().map(getFacilityImages);
console.log(facilityImages);

const Home = () => {
  const { t } = useTranslation();

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
              <Button variant="light" href="booking" className="home-button">
                {t("home.bookingButton")}
              </Button>
            </h3>
          </div>
        </div>
        {/* About Section */}
        <div className="mikyung-container">
          <h2 className="about">{t("home.about")}</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4 mb-md-0">
              <img className="mikyung" src={mikyung} alt="mikyung" />
            </Col>
            <Col xs={12} md={8}>
              <div className="title">
                <h4 className="introduction">{t("home.introduction")}</h4>
                <p className="introduction-mikyung">{t("home.beautyShop")}</p>

                <h4 className="introduction">
                  {t("home.semiPermanentMakeup")}
                </h4>
                <div className="list-container">
                  <div className="list">
                    <div className="list-title">
                      {t("home.semiPermanentMakeup")}
                    </div>
                    <ul>
                      <li>{t("home.eyebrows")}</li>
                      <li>{t("home.lips")}</li>
                      <li>{t("home.eyeliner")}</li>
                      <li>{t("home.hairline")}</li>
                      <li>{t("home.scalpTattoo")}</li>
                    </ul>
                  </div>
                  <div className="list">
                    <div className="list-title">{t("home.curlPerm")}</div>
                    <ul>
                      <li>{t("home.eyelashPerm")}</li>
                    </ul>
                  </div>
                  <div className="list">
                    <div className="list-title">
                      {t("home.cleanPediPlanning")}
                    </div>
                    <ul>
                      <li>{t("home.footCallus")}</li>
                    </ul>
                  </div>
                </div>
                <div className="message">
                  <p className="text-lg">{t("home.callToAction")}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Facility Section */}
        <div className="facility-section">
          <h2 className="facility-title">{t("home.facilityTitle")}</h2>
          <Container>
            <div className="facility-container">
              <Row>
                {facilityImages.map((src, index) => (
                  <Col xs={12} sm={6} md={4} key={index}>
                    <div className="facility-image-wrapper">
                      <img
                        className="facility-images"
                        src={src}
                        alt={`facility-${index}`}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </div>

        <section>
          <p className="trading-hour">
            {t("home.tradingHours")}{" "}
            <Button variant="dark" className="bottom-button" href="booking">
              {t("home.bookingButton")}
            </Button>
          </p>
        </section>
      </Container>
    </section>
  );
};

export default Home;

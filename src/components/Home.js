import React from "react";
import mikyung from "../photos/mikyung.jpg";
import homepage from "../photos/homepage.jpg";
import inside from "../photos/shop/inside4.jpg";
import inside8 from "../photos/shop/inside8.jpg";
import inside5 from "../photos/shop/inside5.jpg";
import inside9 from "../photos/shop/inside9.jpg";
import entrance2 from "../photos/shop/entrance2.jpg";
import work from "../photos/shop/work.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import "./styles.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="homepage-wrapper">
          <img className="homepage" src={homepage} alt="home" />
          <div className="homepage-text">
            <h1>{t("home.welcome")}</h1>
          </div>
          <div>
            <h3 className="homepage-text2">
              {t("home.sejongSpecialty")}{" "}
              <Button
                variant="light"
                href="booking"
                className="text-reset no-underline"
              >
                {t("home.bookingButton")}
              </Button>
            </h3>
          </div>
        </div>

        <div className="mikyung-container">
          <h2 className="about">{t("home.about")}</h2>
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <img className="mikyung" src={mikyung} alt="mikyung" />
              </Col>
              <Col xs={12} md={8}>
                <div className="title">
                  <h4 className="introduction">{t("home.introduction")}</h4>
                  <p>{t("home.beautyShop")}</p>

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
          </Container>
        </div>
        <div className="facility-container">
          <h2 className="facility-images">{t("home.facilityTitle")}</h2>

          <Container>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside5} alt="inside" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside} alt="inside" />
              </Col>

              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={work} alt="work" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={entrance2} alt="entrance2" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside8} alt="inside8" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside9} alt="inside9" />
              </Col>
            </Row>
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
      </div>
    </section>
  );
};

export default Home;

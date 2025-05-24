import React, { useState } from "react";
import mikyung from "../../photos/founder.png";
import { useTranslation } from "react-i18next";
import "./styles/AboutUs.css";

const getFacilityImages = require.context("../../photos/shop/facility/", true);
const facilityImages = getFacilityImages.keys().map(getFacilityImages);

const AboutUs = () => {
  const { t } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState(null);

  const openZoomedImage = (img) => {
    setZoomedImage(img);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <section className="home-section">
      <div className="home-container">
        <h2 className="about">{t("home.about")}</h2>
        <div className="mikyung-container">
          <div className="mikyung-content">
            <img className="mikyung" src={mikyung} alt="mikyung" />
            <div className="text-content">
              <h4 className="introduction">{t("home.introduction")}</h4>
              <p className="introduction-mikyung">{t("home.beautyShop")}</p>
              <div className="message">
                <p>{t("home.callToAction")}</p>
              </div>
            </div>
            {/* <div className="list-container">
              <div className="list">
                <div className="list-title">
                  {t("home.semiPermanentMakeup")}
                </div>
                <ul className="lists">
                  <li className="list-item">{t("home.eyebrows")}</li>
                  <li className="list-item">{t("home.lips")}</li>
                  <li className="list-item">{t("home.eyeliner")}</li>
                  <li className="list-item">{t("home.hairline")}</li>
                  <li className="list-item">{t("home.scalpTattoo")}</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default AboutUs;

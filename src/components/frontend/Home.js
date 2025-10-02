import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import logo from "../../photos/logoNavbar.png";
import image3 from "../../photos/shop/facility/image3.jpg";

import "./styles/Home.css";

const Home2 = () => {
  const { t } = useTranslation();

  const services = [
    {
      name: t("home.eyebrows.name"),
      description: t("home.eyebrows.description"),
      // image: Eyebrows,
    },
    {
      name: t("home.eyeliner.name"),
      description: t("home.eyeliner.description"),
      // image: Eyeliner,
    },
    {
      name: t("home.lips.name"),
      description: t("home.lips.description"),
      // image: Lips,
    },
    // {
    //   name: t("home.hairline.name"),
    //   description: t("home.hairline.description"),
    //   image: Hairline,
    // },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
    }),
  };

  const navigate = useNavigate();

  const categoryMap = {
    Eyebrows: "female",
    Eyeliner: "eye",
    Lips: "lips",
    Hairline: "male",
  };

  const handleViewGallery = (tabKey) => {
    const mappedTab = categoryMap[tabKey] || "female";
    console.log("Navigating to tab:", mappedTab);
    navigate(`/gallery?tab=${mappedTab}`);
  };

  return (
    <div className="homepage-container">
      <section className="hero full-bleed">
        <img
          className="hero__image"
          src={image3}
          alt="Cosmetic tattoo studio interior at Chaeul Beauty"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">Fill the Beauty</h1>
          <p className="hero__subtitle">
            Natural, elegant cosmetic tattooing — brows, lips, eyeliner.
          </p>
          {/* <div className="hero__cta">
            <a className="btn btn--gold btn--lg" href="...">
              Chat on KakaoTalk
            </a>
            <a className="btn btn--ghost" href="#gallery">
              View Results
            </a>
          </div> */}
        </div>
      </section>

      {/* Brand Section */}
      <section className="brand-section">
        <div className="logo-wrap">
          <img src={logo} alt="채울 美 로고" className="brand-logo" />
        </div>

        <p className="brand-subtitle">{t("home.subtitle")}</p>
        <div className="brand-description">
          <p className="brand-description-title">
            {t("home.description.title")}
          </p>
          <p className="brand-description-body">{t("home.description.body")}</p>
          <p className="brand-description-end">{t("home.description.end")}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">{t("home.semiPermanentMakeup")}</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="service-item"
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="service-name">{service.name}</h3>

              {service.description && (
                <ol className="service-description">
                  {service.description.split(" / ").map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ol>
              )}

              <motion.button
                className="learn-more-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleViewGallery(service.name)}
                aria-label={`View ${service.name} gallery`}
              >
                {t("common.viewGallery", "View Gallery")}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
      {/* <section id="services" className="section container">
        <h2 className="h2">Our Services</h2>
        <ul className="cards">
          <li className="card">
            <h3 className="card__title">Brows</h3>
            <p className="card__text">
              Soft, natural definition customised to your features.
            </p>
          </li>
          <li className="card">
            <h3 className="card__title">Lips</h3>
            <p className="card__text">
              Blushed lips that enhance your everyday tone.
            </p>
          </li>
          <li className="card">
            <h3 className="card__title">Eyeliner</h3>
            <p className="card__text">
              Subtle lash-line enhancement for brighter eyes.
            </p>
          </li>
        </ul>
      </section> */}
    </div>
  );
};

export default Home2;

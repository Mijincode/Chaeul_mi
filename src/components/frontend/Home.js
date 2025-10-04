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
    },
    {
      name: t("home.eyeliner.name"),
      description: t("home.eyeliner.description"),
    },
    {
      name: t("home.lips.name"),
      description: t("home.lips.description"),
    },
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
        </div>
      </section>

      {/* Brand Section */}
      <section className="brand-section">
        <div className="logo-wrap">
          <img src={logo} alt="채울 美 로고" className="korean-logo" />
        </div>
        <p className="brand-subtitle">{t("home.subtitle")}</p>

        <div className="brand-description">
          <p className="brand-description-title">
            {t("home.description.title")} {t("home.description.body")}
          </p>

          <p className="brand-description-end">{t("home.description.end")}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">{t("home.services")}</h2>
        <h3 className="services-subtitle">{t("home.services-sub")}</h3>

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
        <div className="home-button">
          <motion.a
            href="https://open.kakao.com/o/sJVFkuT"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            // onClick={closeMenu}
          >
            {t("home.button")}
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home2;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import Eyebrows from "../../photos/ServiceEyebrow.png";
// import Eyeliner from "../../photos/ServiceEyeliner.png";
// import Lips from "../../photos/ServiceLip.png";
// import Hairline from "../../photos/hairline.png";
import logo from "../../photos/logo6.png";
import Hero1 from "../../photos/hero1.png";
import Hero2 from "../../photos/hero1-2.png";
import Hero3 from "../../photos/hero3.png";
import Hero4 from "../../photos/hero4.png";
import Hero5 from "../../photos/hero5.png";
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <img src={Hero1} alt="A" className="grid-item item-a" />
            <img src={Hero2} alt="B" className="grid-item item-b" />
            <img src={Hero3} alt="C" className="grid-item item-c" />
            <img src={Hero4} alt="D" className="grid-item item-d" />
            <img src={Hero5} alt="E" className="grid-item item-e" />
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="brand-section">
        <div className="brand-logo-centered">
          <img src={logo} alt="Logo" className="circular-logo" />
        </div>
        <div className="brand-info">
          <h2 className="brand-title">{t("home.title")}</h2>
          <p className="brand-subtitle">{t("home.subtitle")}</p>
          <div className="brand-description">
            <p className="brand-description-title">
              {t("home.description.title")}
            </p>
            <p className="brand-description-body">
              {t("home.description.body")}
            </p>
            <p className="brand-description-body">
              {t("home.description.sub.body")}
            </p>
            <p className="brand-description-end">{t("home.description.end")}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section wrap">
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
              {/* If you want images back in, un-comment next lines */}
              {/* <img src={service.image} alt={service.name} className="service-image" loading="lazy" /> */}

              <h3 className="service-name">{service.name}</h3>

              {service.description && (
                <ul className="service-description">
                  {service.description.split(" / ").map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
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
    </div>
  );
};

export default Home2;

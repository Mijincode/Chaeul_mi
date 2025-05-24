import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSwipeable } from "react-swipeable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Gallery.css";

const Gallery = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location.search);

  const [activeTab, setActiveTab] = useState("female");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  // Step 1: Check tab in URL on initial render
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromURL = params.get("tab");

    console.log("📌 tabFromURL =", tabFromURL); // Debug log

    if (["female", "male", "eye", "lips"].includes(tabFromURL)) {
      setActiveTab(tabFromURL);
    }
  }, [location.search]);

  // Step 2: Load images
  const getImages = (context) => context.keys().map(context);
  const femaleList = getImages(require.context("../../photos/female", true));
  const maleList = getImages(require.context("../../photos/male", true));
  const eyeList = getImages(require.context("../../photos/eye", true));
  const lipsList = getImages(require.context("../../photos/lips", true));

  const getImageList = () => {
    switch (activeTab) {
      case "female":
        return femaleList;
      case "male":
        return maleList;
      case "eye":
        return eyeList;
      case "lips":
        return lipsList;
      default:
        return femaleList;
    }
  };

  const openZoomedImage = (image, index) => {
    setZoomedImage(image);
    setZoomedIndex(index);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
    setZoomedIndex(null);
  };

  const nextSlide = () => {
    const images = getImageList();
    const nextIndex = (zoomedIndex + 1) % images.length;
    setZoomedImage(images[nextIndex]);
    setZoomedIndex(nextIndex);
  };

  const prevSlide = () => {
    const images = getImageList();
    const nextIndex = (zoomedIndex - 1 + images.length) % images.length;
    setZoomedImage(images[nextIndex]);
    setZoomedIndex(nextIndex);
  };

  const swipeableHandler = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const imageCards = (imageList) => (
    <div className="gallery-container">
      {imageList.map((image, index) => (
        <div key={index} className="gallery-wrapper">
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="gallery-image"
            loading="lazy"
            onClick={() => openZoomedImage(image, index)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="text-container">
        <h3 className="gallery-text">{t("gallery.naturalLook")}</h3>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="custom-tabs mb-3"
      >
        <Tab eventKey="female" title={t("gallery.femaleEyebrow")}>
          {imageCards(femaleList)}
        </Tab>
        <Tab eventKey="male" title={t("gallery.maleEyebrow")}>
          {imageCards(maleList)}
        </Tab>
        <Tab eventKey="eye" title={t("gallery.eye")}>
          {imageCards(eyeList)}
        </Tab>
        <Tab eventKey="lips" title={t("gallery.lipTattoo")}>
          {imageCards(lipsList)}
        </Tab>
      </Tabs>

      {zoomedImage && (
        <div className="zoomed-image-container" {...swipeableHandler}>
          <button
            className="zoomed-button zoomed-button-prev"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <img src={zoomedImage} alt="zoomed" className="zoomed-image" />
          <button
            className="zoomed-button zoomed-button-next"
            onClick={nextSlide}
          >
            &gt;
          </button>
          <button
            className="zoomed-button zoomed-button-close"
            onClick={closeZoomedImage}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

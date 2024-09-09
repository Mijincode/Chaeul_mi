import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./styles/Gallery.css";
import { useSwipeable } from "react-swipeable";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("female");
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  useEffect(() => {}, [activeTab]);

  const femaleImages = require.context("../photos/female/", true);
  const maleImages = require.context("../photos/male/", true);
  const eyeImages = require.context("../photos/eye/", true);
  const lipsImages = require.context("../photos/lips/", true);
  const hairImages = require.context("../photos/hair/", true);
  const feetImages = require.context("../photos/feet/", true);

  const getImages = (context) => context.keys().map(context);

  const femaleList = getImages(femaleImages);
  const maleList = getImages(maleImages);
  const eyeList = getImages(eyeImages);
  const lipsList = getImages(lipsImages);
  const hairList = getImages(hairImages);
  const feetList = getImages(feetImages);

  const getImageList = () => {
    switch (activeTab) {
      case "female":
        return femaleList;
      case "male":
        return maleList;
      case "eye":
        return eyeImages;
      case "lips":
        return lipsList;
      case "hair":
        return hairList;
      case "feet":
        return feetList;
      default:
        return [];
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
    const nextIndex = zoomedIndex + 1 >= images.length ? 0 : zoomedIndex + 1;
    setZoomedImage(images[nextIndex]);
    setZoomedIndex(nextIndex);
  };

  const prevSlide = () => {
    const images = getImageList();
    const nextIndex = zoomedIndex - 1 >= images.length ? 0 : zoomedIndex - 1;
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
            alt={`Gallery item  ${index + 1}`}
            className="gallery-image"
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
        <Tab eventKey="hair" title={t("gallery.scalpTattoo")}>
          {imageCards(hairList)}
        </Tab>
        <Tab eventKey="feet" title={t("gallery.cleanPedi")}>
          {imageCards(feetList)}
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

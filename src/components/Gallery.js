import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./styles/Gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("female");

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

  const imageCards = (imageList) => (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        {imageList.map((image, index) => (
          <Col key={index} className="mb-3">
            <Card border="light">
              <Card.Img
                variant="top"
                src={image}
                alt={`Image ${index + 1}`}
                className="gallery-image"
              />
            </Card>
          </Col>
        ))}
      </div>
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
    </div>
  );
};

export default Gallery;

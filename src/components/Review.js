import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./styles/Review.css";

const Review = () => {
  const { t } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState(null);

  const reviewImages = require.context("../photos/reviews/", true);
  const getReviewImages = () => {
    return reviewImages.keys().map(reviewImages);
  };
  const images = getReviewImages();

  const openZoomedImage = (images) => {
    setZoomedImage(images);
  };
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <div className="review-container">
      <h3>{t("review.title")}</h3>
      <p>{t("review.description")}</p>
      <div className="review-row">
        <Row xs={2} md={4} className="g-4">
          {images.map((image, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={image}
                    className="review-images"
                    onClick={() => openZoomedImage(image)}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <img src={zoomedImage} alt="zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  );
};
export default Review;

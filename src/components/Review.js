import React from "react";
// import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./styles.css";

const Review = () => {
  // const { t } = useTranslation();

  const reviewImages = require.context("../photos/reviews/", true);
  const getReviewImages = () => {
    return reviewImages.keys().map(reviewImages);
  };
  const images = getReviewImages();
  return (
    <Row xs={2} md={4} className="g-4">
      {images.map((image, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={image} className="review-images" />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default Review;

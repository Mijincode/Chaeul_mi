import React from "react";
import { useTranslation } from "react-i18next";
import review1 from "../photos/reviews/image1.jpg";
import review2 from "../photos/reviews/image2.jpg";
import review3 from "../photos/reviews/image3.jpg";
import review4 from "../photos/reviews/image4.jpg";
import review5 from "../photos/reviews/image5.jpg";
import review6 from "../photos/reviews/image6.jpg";
import review7 from "../photos/reviews/image7.jpg";
import review8 from "../photos/reviews/image8.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./styles.css";

const Review = () => {
  const { t } = useTranslation();

  const reviewImages = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
  ];
  return (
    <Row xs={2} md={4} className="g-4">
      {reviewImages.map((image, idx) => (
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

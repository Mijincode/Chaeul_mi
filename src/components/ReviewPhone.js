import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import phone from "../photos/phone1.jpg";
import { useTranslation } from "react-i18next";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles/Review.css";

const reviewImages = require.context("../photos/review-phone", true);
const getReviewImages = () => {
  return reviewImages.keys().map(reviewImages);
};

const ReviewPhone = () => {
  const { t } = useTranslation();
  const images = getReviewImages();
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <div className="review-phone">
      <h5>{t("review.description")}</h5>
      <div className="star-icon">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon icon={faStar} />
        ))}
      </div>

      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      <Container>
        <img src={phone} alt="phone" className="phone" />
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`review-${idx}`}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}
      </Container>
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {images.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default ReviewPhone;

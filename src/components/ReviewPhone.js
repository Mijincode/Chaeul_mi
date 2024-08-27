import React, { useState, useEffect } from "react";
import phone from "../photos/phone1.jpg";
import { useTranslation } from "react-i18next";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";
import swipeGif from "../photos/buy1.gif";

import "./styles/Review.css";

const reviewImages = require.context("../photos/review-phone", true);
const getReviewImages = () => {
  return reviewImages.keys().map(reviewImages);
};

const ReviewPhone = () => {
  const { t } = useTranslation();
  const images = getReviewImages();
  const [slide, setSlide] = useState(0);
  const [swipeClass, setSwipeClass] = useState(0);
  const [showSwipeGif, setShowSwipeGif] = useState(true);

  const nextSlide = () => {
    setSwipeClass("swipe-left");
    setTimeout(() => {
      setSlide(slide === images.length - 1 ? 0 : slide + 1);
      setSwipeClass("");
    }, 300);
  };

  const prevSlide = () => {
    setSwipeClass("swipe-right");
    setTimeout(() => {
      setSlide(slide === 0 ? images.length - 1 : slide - 1);
      setSwipeClass("");
    }, 300);
  };

  const handler = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeGif(false); // Hide the GIF after 3 seconds
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="review-phone">
      <h5 className="review-valuable">{t("review.description")}</h5>
      <div className="star-icon">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon icon={faStar} key={index} />
        ))}
      </div>

      {/* <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} /> */}
      <div {...handler} className={`phone-frame ${swipeClass}`}>
        <img src={phone} alt="phone" className="phone" />
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`review-${idx}`}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}
      </div>
      {/* <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      /> */}
      <div className="swipe-container">
        {showSwipeGif && (
          <img
            src={swipeGif}
            alt="Swipe to navigate"
            className="swipe-gesture"
            style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              zIndex: 10,
            }}
          />
        )}{" "}
      </div>
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

import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import image1 from "../photos/review1.jpg";
import image2 from "../photos/review2.jpg";
import image3 from "../photos/review3.jpg"; // Add more images as needed

const ReviewPopup = ({ show, handleClose }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="Review Image 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Review Image 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Review Image 3" />
          </Carousel.Item>
          {/* Add more Carousel.Item here for additional images */}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewPopup;

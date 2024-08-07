import React from "react";
// import { useTranslation } from "react-i18next";
import image1 from "../photos/female/image1.jpg";
import image2 from "../photos/female/image2.jpg";
import image3 from "../photos/female/image3.jpg";
import image4 from "../photos/female/image4.jpg";
import image5 from "../photos/female/image5.png";
import { withTranslation } from "react-google-multi-lang";
import "./styles.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div>
      <h1>채울_美</h1>
      <h3>
        개인의 취향과 눈매에 맞추어 1대1 디자인해드립니다 [눈썹 아이라인 입술
        헤어라인]
      </h3>
      <Tabs
        defaultActiveKey="female"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="female" title="여자Eyebrow">
          <Row xs={1} md={2} className="g-4">
            {images.map((image, idx) => (
              <Col key={idx}>
                <Card border="light" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={image}
                    alt="1"
                    style={{ width: "200px", marginRight: "300px" }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        <Tab eventKey="male" title="남자Eyebrow">
          Tab content for male photos
        </Tab>

        <Tab eventKey="eyeline" title="아이라인">
          Tab content for eyeline
        </Tab>

        <Tab eventKey="lips" title="립타투">
          Tab content for lips
        </Tab>
        <Tab eventKey="hair" title="두피타투">
          Tab content for hair
        </Tab>
        <Tab eventKey="feet" title="클린패디">
          Tab content for hair
        </Tab>
      </Tabs>
      <p></p>
    </div>
  );
};
export default withTranslation(Gallery);

import React from "react";
import mikyung from "../photos/mikyung.jpg";
import homepage from "../photos/homepage.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { withTranslation } from "react-google-multi-lang";
import "./styles.css";

const Home = () => (
  <section className="home-section">
    <div className="home-container">
      <div className="homepage-wrapper">
        <img className="homepage" src={homepage} alt="home" />
        <div className="homepage-text">
          <h1>채울 美에 오신 것을 환영합니다</h1>
        </div>
        <div>
          <h3 className="homepage-text2">세종시 눈썹 문신 전문샵</h3>
        </div>
      </div>
      <div className="mikyung-container">
        <h2 className="text-center">원장 소개 </h2>
        <div>
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <img className="mikyung" src={mikyung} alt="mikyung" />
              </Col>
              <Col xs={12} lg={8}>
                <div>
                  <section className="director">
                    <h4 className="introduction"> 이미경</h4>

                    <p>코스메틱 반영구 타투 12년 경력</p>
                    <p>
                      크리에이티브 뷰티 패션 아트 페어 심사위원 (Creative
                      International Beauty Association) 2022
                    </p>
                  </section>

                  <ul>
                    <div className="list-title">반영구 화장</div>
                    <div className="list">
                      <li>눈썹</li>
                      <li>입술</li>
                      <li>아이라인</li>
                      <li>헤어라인 밀도 보강</li>
                      <li>탈모 두피 문신</li>
                    </div>
                  </ul>

                  <ul>
                    <div className="list-title">뷰러펌</div>
                    <div className="list">
                      <li>속눈썹 펌</li>
                      <li>영야펌</li>
                      <li>아이라인</li>
                    </div>
                  </ul>

                  <ul>
                    <div className="list-title"> 클린패디 플래닝</div>
                    <div className="list">
                      <li>발각질 관리</li>
                    </div>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  </section>
);

export default withTranslation(Home);

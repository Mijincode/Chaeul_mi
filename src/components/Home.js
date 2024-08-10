import React from "react";
import mikyung from "../photos/mikyung.jpg";
import homepage from "../photos/homepage.jpg";
import inside from "../photos/shop/inside4.jpg";
import inside8 from "../photos/shop/inside8.jpg";
// import inside7 from "../photos/shop/inside7.jpg";
import inside5 from "../photos/shop/inside5.jpg";
import inside9 from "../photos/shop/inside9.jpg";
import entrance2 from "../photos/shop/entrance2.jpg";
import work from "../photos/shop/work.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withTranslation } from "react-google-multi-lang";
import "./styles.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="homepage-wrapper">
          <img className="homepage" src={homepage} alt="home" />
          <div className="homepage-text">
            <h1>채울 美에 오신 것을 환영합니다</h1>
          </div>
          <div>
            <h3 className="homepage-text2">
              세종시 눈썹 문신 전문샵{" "}
              <Button variant="light">
                {" "}
                <a href="booking" className="text-reset no-underline">
                  Book Now
                </a>
              </Button>
            </h3>
          </div>
        </div>

        <div className="mikyung-container">
          <h2 className="about">About 채울 美 </h2>
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <img className="mikyung" src={mikyung} alt="mikyung" />
              </Col>
              <Col xs={12} md={8}>
                <div className="title">
                  <h4 className="introduction"> 원장 이미경</h4>
                  <p>
                    당신의 아름다움을 완성하는 전문 미용 샵 채울미는 세종시의
                    프리미엄 미용 전문 샵으로, 고객님들께 가장 정교하고 세련된
                    미용 서비스를 제공하기 위해 최선을 다하고 있습니다. 저희
                    샵은 12년 이상의 풍부한 경험을 가진 미용 전문가 이미경
                    원장이 이끄는 전문 팀이 운영하고 있으며, 매일매일 고객님의
                    아름다움을 돋보이게 하기 위해 노력하고 있습니다. 2022년
                    크리에이티브 국제 뷰티 협회 아트 페어 심사위원으로서 최신
                    트렌드와 기법에 앞서 나가고 있습니다.
                  </p>

                  <h4 className="introduction">반영구 시술</h4>
                  <div className="list-container">
                    <div className="list">
                      <div className="list-title">반영구 화장</div>
                      <ul>
                        <li>눈썹 : 엠보눈썹, 콤보눈썹, 수진눈썹</li>
                        <li>입술</li>
                        <li>아이라인</li>
                        <li>헤어라인 밀도 보강</li>
                        <li>탈모 두피 문신</li>
                      </ul>
                    </div>
                    <div className="list">
                      <div className="list-title">뷰러펌</div>
                      <ul>
                        <li>속눈썹 펌</li>
                        <li>영야펌</li>
                        <li>아이라인</li>
                      </ul>
                    </div>
                    <div className="list">
                      <div className="list-title">클린패디 플래닝</div>
                      <ul>
                        <li>발각질 관리</li>
                      </ul>
                    </div>
                  </div>
                  <div className="message">
                    <p className="text-lg">
                      편안하고 환영받는 환경에서 최고 수준의 미용 시술을 경험해
                      보세요. 자연미를 강조하거나 새로운 시도를 원하신다면,
                      채울미가 여러분의 아름다움을 돋보이게 도와드리겠습니다.
                      풍부한 경험과 전문성을 바탕으로 고객님께 맞춤형 솔루션을
                      제공하며, 최신 기술과 트렌드를 반영하여 최상의 결과를
                      보장합니다. 오랜 경력과 업계 내 명성을 통해 신뢰를 쌓아온
                      채울미에서 자신만의 아름다움을 발견해보세요. 저희 샵은
                      고객님 한 분 한 분에게 최상의 서비스를 제공하기 위해 항상
                      노력하고 있습니다. 편안한 분위기 속에서 고품질의 서비스를
                      경험해보세요.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="facility-container">
          <h2 className="facility-images">채울 美 둘러 보기</h2>

          <Container>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside5} alt="inside" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside} alt="inside" />
              </Col>

              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={work} alt="work" />
              </Col>
              {/* <Col xs={12} sm={6} md={3}>
              <img className="inside" src={inside7} alt="inside1" />
            </Col> */}
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={entrance2} alt="entrance2" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside8} alt="inside8" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <img className="inside" src={inside9} alt="inside9" />
              </Col>
            </Row>
          </Container>
        </div>
        <section>
          <p className="trading-hour">
            운영시간 : 평일/토요일 10:00am ~ 18:00pm{" "}
            <Button variant="dark" className="bottom-button">
              <a href="booking" className="text-reset no-underline">
                Book Now
              </a>
            </Button>
          </p>
        </section>
      </div>
    </section>
  );
};

export default withTranslation(Home);

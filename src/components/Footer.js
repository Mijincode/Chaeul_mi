import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBCol,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import naverLogo from "../photos/naverLogo.png";
import { withTranslation } from "react-google-multi-lang";
import "./styles.css";

const Footer = () => (
  <MDBFooter
    bgColor="light"
    className="mt-4 text-center text-lg-start text-muted"
  >
    <MDBContainer>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="footer-title">Chaeul_mi</span>
        </div>
        <div>
          <a
            href="https://www.instagram.com/chaeul_mi/"
            className="text-reset fw-bold"
          >
            <FontAwesomeIcon className="instaIcon" icon={faInstagram} />
          </a>
          <a
            className="text-reset fw-bold"
            href="https://blog.naver.com/l8238076"
            aria-label="Naver Blog"
          >
            <img src={naverLogo} alt="Naver Logo" className="icon" />
          </a>
        </div>
      </section>
    </MDBContainer>

    <section>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md={3} lg={4} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon icon="gem" className="me-3" />
              About US
            </h6>
            <p>
              We help create a self-guided, multi-model study plan to support
              student learning that cater to their learning styles.
            </p>
          </MDBCol>

          <MDBCol md={3} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Support Recources</h6>
            <p>
              <a href="#!" className="text-reset">
                Customer Service
              </a>
            </p>
            <p>
              <p>
                <a href="faq" className="text-reset">
                  FAQ
                </a>
              </p>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Terms of Use
              </a>
            </p>
          </MDBCol>

          <MDBCol md={4} lg={3} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              세종시 나성북도 30
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" />
              0507-1353-8076
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <section>
      <MDBContainer className="mt-5">
        <MDBRow>
          <p>
            <MDBIcon icon="home" className="me-2" />
          </p>
        </MDBRow>
      </MDBContainer>
    </section>

    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2024 Copyright: 채울_美
    </div>
  </MDBFooter>
);

export default withTranslation(Footer);

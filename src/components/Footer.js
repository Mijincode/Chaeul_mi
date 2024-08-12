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
import ganpan from "../photos/ganpan2.jpg";
import { useTranslation } from "react-i18next";
import "./styles.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <MDBFooter
      bgColor="light"
      className="mt-4 text-center text-lg-start text-muted"
    >
      <MDBContainer className="footer-container d-flex justify-content-center align-items-center">
        <section className="p-4">
          <span className="footer-title">
            <img src={ganpan} alt="ganpan" className="ganpan" />{" "}
          </span>
        </section>
      </MDBContainer>

      <section>
        <MDBContainer className="mt-20">
          <MDBRow>
            <MDBCol md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                {t("footer.aboutUs")}
              </h6>
              <p>{t("footer.aboutUsContent")}</p>
            </MDBCol>

            <MDBCol md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t("footer.supportResources")}
              </h6>
              {/* <p>
              <a href="#!" className="text-reset">
                Customer Service
              </a>
            </p> */}
              <p>
                <a href="faq" className="text-reset">
                  FAQS
                </a>
              </p>
            </MDBCol>

            <MDBCol md={4} lg={3} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                {t("footer.address")}
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                0507-1353-8076
              </p>
              <p>
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
              </p>
            </MDBCol>
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
};
export default Footer;

// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBIcon,
//   MDBCol,
// } from "mdb-react-ui-kit";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import naverLogo from "../../photos/naverLogo.png";
// import ganpan from "../../photos/ganpan2.jpg";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import "./styles/Footer.css";

// const Footer = () => {
//   const { t } = useTranslation();
//   return (
//     <MDBFooter className="mt-4 text-center text-lg-start text-muted">
//       <MDBContainer className="footer-container d-flex justify-content-center align-items-center">
//         <section className="p-4">
//           <span className="footer-title">
//             <img src={ganpan} alt="ganpan" className="ganpan" />{" "}
//           </span>
//         </section>
//       </MDBContainer>

//       <section>
//         <MDBContainer className="mt-20">
//           <MDBRow>
//             <MDBCol md={3} lg={4} xl={3} className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon icon="gem" className="me-3" />
//                 {t("footer.aboutUs")}
//               </h6>
//               <p className="footer-content">{t("footer.aboutUsContent")}</p>
//             </MDBCol>

//             <MDBCol md={3} lg={2} xl={2} className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 {t("footer.supportResources")}
//               </h6>
//               {/* <p>
//               <a href="#!" className="text-reset">
//                 Customer Service
//               </a>
//             </p> */}
//               <div>
//                 <p>
//                   <Link to="/faqs" className="footer-link text-reset">
//                     FAQS
//                   </Link>
//                 </p>
//               </div>
//             </MDBCol>

//             <MDBCol md={3} lg={2} xl={2} className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//               <div className="contact-details">
//                 <p>
//                   <MDBIcon icon="home" className="me-2 " />
//                   {t("footer.address")}
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <a
//                     href="https://www.instagram.com/chaeul_mi/"
//                     className="text-reset fw-bold"
//                   >
//                     <FontAwesomeIcon className="instaIcon" icon={faInstagram} />
//                   </a>

//                   <a
//                     className="text-reset fw-bold"
//                     href="https://blog.naver.com/l8238076"
//                     aria-label="Naver Blog"
//                   >
//                     <img
//                       src={naverLogo}
//                       alt="Naver Logo"
//                       className="naver-icon"
//                     />
//                   </a>
//                 </p>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//       >
//         © 2024 Copyright: 채울_美
//       </div>
//     </MDBFooter>
//   );
// };
// export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import naverLogo from "../../photos/naverLogo.png";
import ganpan from "../../photos/ganpan2.jpg";
import "./styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="ganpan-wrapper">
          <img src={ganpan} alt="ganpan" className="ganpan" />
        </div>

        <div className="footer-content-wrapper">
          <div className="footer-section">
            <h6 className="footer-title">{t("footer.aboutUs")}</h6>
            <p className="footer-text">{t("footer.aboutUsContent")}</p>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">{t("footer.supportResources")}</h6>
            <p>
              <Link to="/faqs" className="footer-link">
                FAQS
              </Link>
            </p>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">{t("footer.contact")}</h6>
            <p className="footer-text">{t("footer.address")}</p>
            <div className="footer-icons">
              <a
                href="https://www.instagram.com/chaeul_mi/"
                className="footer-icon-link"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="instaIcon" />
              </a>
              <a
                href="https://blog.naver.com/l8238076"
                className="footer-icon-link"
                aria-label="Naver Blog"
              >
                <img src={naverLogo} alt="Naver Logo" className="naver-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2024 Copyright: 채울_美</div>
      </div>
    </footer>
  );
};

export default Footer;

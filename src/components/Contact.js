import React from "react";
import map from "../photos/map.png";
import kakaotalk from "../photos/kakaotalk.png";
import { withTranslation } from "react-google-multi-lang";
import "./styles.css";

const Contact = () => (
  <div>
    <h3>오시는 길 - 세종시 나성동</h3>
    <img className="map" src={map} alt="Map" />
    <a
      href="https://maps.app.goo.gl/CiSc5huQ8eq5L2398"
      aria-label="View on Google Maps"
    >
      View on Google Maps
    </a>

    <p className="me-3">
      카카오 상담문의
      <a
        className="text-reset fw-bold"
        href="https://open.kakao.com/o/sJVFkuT"
        aria-label="KakaoTalk Contact"
      >
        <img src={kakaotalk} alt="Kakaotalk Icon" className="icon" />
      </a>
    </p>
  </div>
);

export default withTranslation(Contact);

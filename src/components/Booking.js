import React from "react";
import { withTranslation } from "react-google-multi-lang";
import "./styles.css";

const Booking = () => (
  <div>
    <h3>채울美 온라인 예약 가능합니다.</h3>
    <h4>원하시는 날짜와 시간을 선택해주세요.</h4>
    <p>예약가능시간: 9:30 ~ 17:00 (주말가능).</p>
  </div>
);

export default withTranslation(Booking);

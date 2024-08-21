import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles/Booking.css";

const Booking = () => {
  const { t } = useTranslation();
  const [value, onChange] = useState(new Date());
  return (
    <div className="booking-container">
      <h1 className="booking-title">{t("booking.title")}</h1>
      <p>{t("booking.selectDateTime")}</p>
      <p>{t("booking.availableHours")}</p>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Booking;

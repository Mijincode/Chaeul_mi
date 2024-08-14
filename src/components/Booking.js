import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/Booking.css";

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("booking.title")}</h1>
      <p>{t("booking.selectDateTime")}</p>
      <p>{t("booking.availableHours")}</p>
    </div>
  );
};

export default Booking;

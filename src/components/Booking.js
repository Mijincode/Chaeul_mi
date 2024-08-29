import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import "./styles/Booking.css";

const Booking = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 10)
  );

  const filterDate = (date) => {
    return date.getDay() !== 0;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setStartDate(setHours(setMinutes(date, 0), 10));
  };

  const tileClassName = ({ date }) => {
    return date.getDay() === 0 ? "disabled-day" : null;
  };

  const getMinTime = (day) => {
    switch (day) {
      case 2:
      case 5:
        return setHours(setMinutes(new Date(), 0), 10);
      default:
        return setHours(setMinutes(new Date(), 0), 10);
    }
  };

  const getMaxTime = (day) => {
    switch (day) {
      case 2:
      case 5:
        return setHours(setMinutes(new Date(), 0), 19);
      default:
        return setHours(setMinutes(new Date(), 0), 16);
    }
  };

  const getAvaliableTimes = () => {
    if (!selectedDate) return { minTime: startDate, maxTime: startDate };

    const day = selectedDate.getDay();
    return {
      minTime: getMinTime(day),
      maxTime: getMaxTime(day),
    };
  };

  const { minTime, maxTime } = getAvaliableTimes();

  return (
    <div className="booking-container">
      <h1 className="booking-title">{t("booking.title")}</h1>
      <div className="booking-available">
        <p className="booking-hours-label">| {t("booking.availableHours")}</p>
        <ul className="booking-hours-list">
          <li className="booking-hours">{t("booking.availableHoursFive")}</li>
          <li className="booking-hours">{t("booking.availableHoursSeven")}</li>
        </ul>
      </div>

      <p className="booking-date"> {t("booking.selectDate")}</p>
      <div className="calendar-timepicker-container">
        <div className="calendar-container">
          <Calendar
            onClickDay={handleDateClick}
            value={selectedDate}
            tileClassName={tileClassName}
            className="custom-calendar"
          />
        </div>

        {selectedDate && (
          <p className="booking-time">{t("booking.selectTime")}</p>
        )}

        <div className="timepicker-container">
          {selectedDate && (
            <div className="time-picker-submit-container">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                required
                filterDate={filterDate}
                form="external-form"
                dateFormat="MMMM d, yyyy h:mm aa"
                minTime={minTime}
                maxTime={maxTime}
                className="custom-datepicker"
              />
              <form id="external-form">
                <input type="submit" />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;

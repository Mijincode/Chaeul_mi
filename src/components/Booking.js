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
  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 9)
  );

  const filterDate = (date) => {
    return date.getDay() !== 0;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setStartDate(setHours(setMinutes(date, 30), 9));
  };

  const tileClassName = ({ date }) => {
    return date.getDay() === 0 ? "disabled-day" : null;
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">{t("booking.title")}</h1>
      <p>{t("booking.selectDateTime")}</p>
      <p>{t("booking.availableHours")}</p>
      <div className="calendar-timepicker-container">
        <div className="calendar-container">
          <Calendar
            onClickDay={handleDateClick}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>
        <div className="timepicker-container">
          {selectedDate && !filterDate(selectedDate) ? (
            <p>Sundays are not available for booking.</p>
          ) : (
            selectedDate && (
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
                  minTime={setHours(setMinutes(new Date(), 30), 9)}
                  maxTime={setHours(setMinutes(new Date(), 0), 17)}
                  className="custom-datepicker"
                />
                <form id="external-form">
                  <input type="submit" />
                </form>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;

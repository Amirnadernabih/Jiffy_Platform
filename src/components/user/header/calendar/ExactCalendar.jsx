/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Receipt from "../../../../assets/Receipt.svg";
import '../../header/Header.css';

const ExactCalendar = ({ hideBookButton = false, hideReceiptBackground = false }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const generateCalendarDays = (month, year) => {
    const days = [];

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0);

    const startDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();
    const prevMonthDaysToShow = startDayOfWeek;

    // Previous month
    for (let i = prevMonthDaysToShow - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay.getDate() - i,
        isPrevMonth: true,
        fullDate: new Date(year, month - 1, prevMonthLastDay.getDate() - i),
      });
    }

    // Current month
    for (let i = 1; i <= totalDays; i++) {
      days.push({
        date: i,
        isPrevMonth: false,
        isNextMonth: false,
        fullDate: new Date(year, month, i),
      });
    }

    // Next month
    const nextMonthDaysToShow = 42 - days.length;
    for (let i = 1; i <= nextMonthDaysToShow; i++) {
      days.push({
        date: i,
        isNextMonth: true,
        fullDate: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays(currentMonth, currentYear);

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    if (!day.isPrevMonth && !day.isNextMonth) {
      if (!selectedFromDate || (selectedFromDate && selectedToDate)) {
        setSelectedFromDate(day.fullDate);
        setSelectedToDate(null);
      } else {
        if (day.fullDate > selectedFromDate) {
          setSelectedToDate(day.fullDate);
        } else {
          setSelectedFromDate(day.fullDate);
          setSelectedToDate(null);
        }
      }
    }
  };

  const isSameDate = (d1, d2) => d1 && d2 && d1.getTime() === d2.getTime();

  const isDateSelected = (dateObj) =>
    isSameDate(dateObj.fullDate, selectedFromDate) || isSameDate(dateObj.fullDate, selectedToDate);

  const isDateInRange = (dateObj) => {
    if (!selectedFromDate || !selectedToDate) return false;
    const time = dateObj.fullDate.getTime();
    return (
      time > Math.min(selectedFromDate.getTime(), selectedToDate.getTime()) &&
      time < Math.max(selectedFromDate.getTime(), selectedToDate.getTime())
    );
  };

  const getDayLabel = () => {
    const currentDay = today.getDate();
    if (!selectedFromDate) return '';
    const selectedDay = selectedFromDate.getDate();

    if (selectedDay === currentDay) return 'Today';
    if (selectedDay === currentDay + 1) return 'Tomorrow';
    if (selectedDay === currentDay + 2) return 'Day After Tomorrow';
    return selectedFromDate.toDateString();
  };

  const handleBookNow = () => setShowCard(true);

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-wrapper">
          { !hideReceiptBackground && (
            <div className={`behind-card ${showCard ? 'show' : ''}`}>
              <div className="card-content" style={{ backgroundImage: `url(${Receipt})` }}>
                <div className="success-header">
                  <div className="success-checkmark">
                    <div className="checkmark-circle">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="success-title">Successfully Booked!</h3>
                </div>

                <div className="booking-info">
                  <p className="confirmation-text">
                    Hello Lina, <br />
                    Your booking with Dr Nyla is<br />
                    Confirmed
                  </p>
                </div>

                <hr />

                <div className="ticket-section">
                  <h4 className="ticket-title">Your Ticket # 3 in the line!</h4>
                  <div className="ticket-details">
                    <div className="detail-item">
                      <div className="detail-value">
                        <div>Date</div>
                        <div>
                          {selectedFromDate?.getDate()}/{selectedToDate?.getDate() || selectedFromDate?.getDate()}/
                          {selectedFromDate?.getFullYear() || '2024'}
                        </div>
                      </div>
                    </div>

                    <div className="detail-item">
                      <div className="detail-value">
                        <div>Time</div>
                        <div>08:30 PM</div>
                      </div>
                    </div>
                  </div>

                  <button className="pdf-button">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 11L5 8H7V4H9V8H11L8 11Z" fill="currentColor" />
                      <path d="M3 12H13V14H3V12Z" fill="currentColor" />
                    </svg>
                    Get PDF Receipt
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className={`calendar-main ${showCard ? 'elevated' : ''}`}>
            <div className="calendar-card">
              <div className="calendar-header">
                <div className="header-navigation">
                  <ChevronLeft size={20} className="nav-arrow" onClick={goToPreviousMonth} />
                  <span className="month-year">
                    {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' }).toUpperCase()} {currentYear}
                  </span>
                  <ChevronRight size={20} className="nav-arrow" onClick={goToNextMonth} />
                </div>

                <div className="day-label">{getDayLabel()}</div>
              </div>

              <div className="days-of-week">
                {daysOfWeek.map((day) => (
                  <div key={day} className="day-header">
                    {day}
                  </div>
                ))}
              </div>

              <div className="calendar-grid">
                {calendarDays.map((day, index) => {
                  const isSelected = isDateSelected(day);
                  const isHovered = !day.isPrevMonth && !day.isNextMonth && hoveredDate === day.date;

                  const start = selectedFromDate && selectedToDate
                    ? (selectedFromDate < selectedToDate ? selectedFromDate : selectedToDate)
                    : null;

                  const end = selectedFromDate && selectedToDate
                    ? (selectedFromDate > selectedToDate ? selectedFromDate : selectedToDate)
                    : null;

                  const isStartDate = start && isSameDate(day.fullDate, start);
                  const isEndDate = end && isSameDate(day.fullDate, end);

                  const isInRange = start && end && (day.fullDate >= start && day.fullDate <= end);

                  return (
                    <div key={index} className="date-cell">
                      <button
                        onClick={() => handleDateClick(day)}
                        onMouseEnter={() => setHoveredDate(day.date)}
                        onMouseLeave={() => setHoveredDate(null)}
                        className={`date-button ${day.isPrevMonth || day.isNextMonth ? 'disabled' : 'enabled'} ${
                          isSelected ? 'selected' : ''
                        } ${isHovered && !isSelected && !isInRange ? 'hovered' : ''}`}
                      >
                        {day.date}
                      </button>
                      {isInRange && (
                        <div className={`range-background ${isStartDate ? 'start' : ''} ${isEndDate ? 'end' : ''}`} />
                      )}
                    </div>
                  );
                })}
              </div>

              { !hideBookButton && (
                <div className="book-button-container">
                  <button onClick={handleBookNow} className="book-button">Book Now</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExactCalendar;

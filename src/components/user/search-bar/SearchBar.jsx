import { useState, useRef, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Button, Form, FormControl } from 'react-bootstrap';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  // Open-one-only controller: "category" | "location" | "date" | "time" | null
  const [activeInput, setActiveInput] = useState(null);

  // Values
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Refs (used for outside-click close)
  const categoryRef = useRef(null);
  const locationRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const navigate = useNavigate();

  // Static data
  const categories = [
    'Restaurants', 'Hotels', 'Entertainment', 'Shopping', 'Health & Medical',
    'Beauty & Spa', 'Automotive', 'Home Services', 'Professional Services',
    'Education', 'Sports & Recreation', 'Travel & Tourism'
  ];

  const locations = [
    'Current Location', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
    'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX',
    'San Jose, CA', 'Austin, TX'
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // ------- Calendar helpers -------
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun..6=Sat
    // convert to Monday-first index
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const daysInPrevMonth = getDaysInMonth(currentMonth - 1, currentYear);

    const days = [];
    // previous month padding
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth - 1, daysInPrevMonth - i),
      });
    }
    // current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(currentYear, currentMonth, day),
      });
    }
    // next month padding to fill 6 rows x 7 cols = 42
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth + 1, day),
      });
    }
    return days;
  };

  // ------- Outside click close -------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryRef.current?.contains(event.target) ||
        locationRef.current?.contains(event.target) ||
        dateRef.current?.contains(event.target) ||
        timeRef.current?.contains(event.target)
      ) {
        return;
      }
      setActiveInput(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ------- Date handlers -------
  const handleDateSelect = (dayObj) => {
    if (dayObj.isCurrentMonth) {
      setSelectedDate(dayObj.date);
      setActiveInput(null);
    }
  };

  const handleQuickDateSelect = (type) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    switch (type) {
      case 'today':
        setSelectedDate(today);
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
        break;
      case 'tomorrow':
        setSelectedDate(tomorrow);
        setCurrentMonth(tomorrow.getMonth());
        setCurrentYear(tomorrow.getFullYear());
        break;
      case 'any':
        setSelectedDate(null);
        break;
      default:
        break;
    }
    setActiveInput(null);
  };

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((y) => y - 1);
      } else {
        setCurrentMonth((m) => m - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((y) => y + 1);
      } else {
        setCurrentMonth((m) => m + 1);
      }
    }
  };

  // ------- Time handlers -------
  const handleTimeChange = (type, value) => {
    if (!selectedTime) {
      setSelectedTime({ hour: 12, minute: 0, period: 'AM', [type]: value });
    } else {
      setSelectedTime((prev) => ({ ...prev, [type]: value }));
    }
  };

  const incrementTime = (type) => {
    setSelectedTime((prev) => {
      if (!prev) return { hour: 1, minute: 0, period: 'AM' };
      if (type === 'hour') {
        const newHour = prev.hour === 12 ? 1 : prev.hour + 1;
        return { ...prev, hour: newHour };
      } else if (type === 'minute') {
        const newMinute = (prev.minute + 10) % 60;
        return { ...prev, minute: newMinute };
      }
      return prev;
    });
  };

  const decrementTime = (type) => {
    setSelectedTime((prev) => {
      if (!prev) return { hour: 12, minute: 50, period: 'AM' };
      if (type === 'hour') {
        const newHour = prev.hour === 1 ? 12 : prev.hour - 1;
        return { ...prev, hour: newHour };
      } else if (type === 'minute') {
        const newMinute = prev.minute === 0 ? 50 : prev.minute - 10;
        return { ...prev, minute: newMinute };
      }
      return prev;
    });
  };

  // ------- Helpers -------
  const isToday = (date) => date.toDateString() === new Date().toDateString();
  const isTomorrow = (date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return date.toDateString() === tomorrow.toDateString();
  };
  const isSelectedDate = (date) =>
    selectedDate && date.toDateString() === selectedDate.toDateString();

  const formatDisplayDate = () => {
    if (!selectedDate) return '';
    return selectedDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatDisplayTime = () => {
    if (!selectedTime) return '';
    return `${selectedTime.hour.toString().padStart(2, '0')}:${selectedTime.minute
      .toString()
      .padStart(2, '0')} ${selectedTime.period}`;
  };

  // ------- Render -------
  return (
    <div className="search-bar-container">
      <Form className="search-bar d-flex align-items-center justify-content-center">
        {/* Category */}
        <div className="d-flex align-items-center ss dropdown-container" ref={categoryRef}>
          <FaSearch className="icon" />
          <FormControl
            placeholder="Search Category"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setActiveInput('category');
            }}
            onClick={() => setActiveInput('category')}
          />
          {activeInput === 'category' && (
            <div className="dropdown-menu category-dropdown">
              {categories
                .filter((c) =>
                  c.toLowerCase().includes(selectedCategory.toLowerCase())
                )
                .map((category, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedCategory(category);
                      setActiveInput(null);
                    }}
                  >
                    {category}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="vertical-divider" />

        {/* Location (custom panel like your screenshot) */}
        <div className="d-flex align-items-center ss dropdown-container" ref={locationRef}>
          <FaMapMarkerAlt className="icon" />
          <FormControl
            placeholder="Current Location"
            value={selectedLocation}
            onChange={(e) => {
              setSelectedLocation(e.target.value);
              setActiveInput('location');
            }}
            onClick={() => setActiveInput('location')}
          />
          {activeInput === 'location' && (
            <div className="custom-location-dropdown">
              <div
                className="dropdown-item current-location"
                onClick={() => {
                  setSelectedLocation('Current Location');
                  setActiveInput(null);
                }}
              >
                <FaMapMarkerAlt className="me-2" />
                Current Location
              </div>

              <input
                type="text"
                className="form-control location-input"
                placeholder="Enter Location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              />

              <div className="location-suggestions">
                {selectedLocation.trim() !== '' &&
                  locations
                    .filter(
                      (l) =>
                        l.toLowerCase().includes(selectedLocation.toLowerCase()) &&
                        l !== 'Current Location'
                    )
                    .map((location, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                          setSelectedLocation(location);
                          setActiveInput(null);
                        }}
                      >
                        {location}
                      </div>
                    ))}
              </div>
            </div>
          )}
        </div>

        <div className="vertical-divider" />

<div className='d-flex searchbar-last'>
        {/* Date Picker */}
        <div className="d-flex align-items-center">
          <FaCalendarAlt className="icon me-2" />
          <div className="custom-date-picker" ref={dateRef}>
            <input
              type="text"
              className="form-control"
              placeholder="Any Date"
              value={formatDisplayDate()}
              onClick={() => setActiveInput(activeInput === 'date' ? null : 'date')}
              readOnly
              style={{ cursor: 'pointer' }}
            />
            {activeInput === 'date' && (
              <div className="custom-date-dropdown">
                <div className="date-header">
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={() => navigateMonth('prev')}
                  >
                    <span>‹</span>
                  </button>
                  <span className="month-year">
                    {monthNames[currentMonth]} {currentYear}
                  </span>
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={() => navigateMonth('next')}
                  >
                    <span>›</span>
                  </button>
                </div>

                <div className="quick-actions">
                  <button
                    type="button"
                    className={`quick-btn ${
                      selectedDate && isToday(selectedDate) ? 'active' : ''
                    }`}
                    onClick={() => handleQuickDateSelect('today')}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    className={`quick-btn ${
                      selectedDate && isTomorrow(selectedDate) ? 'active' : ''
                    }`}
                    onClick={() => handleQuickDateSelect('tomorrow')}
                  >
                    Tomorrow
                  </button>
                  <button
                    type="button"
                    className={`quick-btn ${!selectedDate ? 'active' : ''}`}
                    onClick={() => handleQuickDateSelect('any')}
                  >
                    Any Time
                  </button>
                </div>

                <div className="calendar-grid d-flex flex-column">
                  <div className="day-names">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div className="days-grid">
                    {generateCalendarDays().map((dayObj, index) => (
                      <span
                        key={index}
                        className={`day ${!dayObj.isCurrentMonth ? 'other-month' : ''} ${
                          isSelectedDate(dayObj.date) ? 'selected' : ''
                        } ${isToday(dayObj.date) ? 'today' : ''}`}
                        onClick={() => handleDateSelect(dayObj)}
                      >
                        {dayObj.day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="vertical-divider" />

        {/* Time Picker */}
        <div className="d-flex align-items-center">
          <FaClock className="icon me-2" />
          <div className="custom-time-picker" ref={timeRef}>
            <input
              type="text"
              className="form-control"
              placeholder="Any Time"
              value={formatDisplayTime()}
              onClick={() => setActiveInput(activeInput === 'time' ? null : 'time')}
              readOnly
              style={{ cursor: 'pointer' }}
            />
            {activeInput === 'time' && (
              <div className="custom-time-dropdown">
                <div className="time-toggle">
                  <button
                    type="button"
                    className={`time-toggle-btn ${
                      selectedTime?.period === 'AM' ? 'active' : ''
                    }`}
                    onClick={() => handleTimeChange('period', 'AM')}
                  >
                    AM
                  </button>
                  <button
                    type="button"
                    className={`time-toggle-btn ${
                      selectedTime?.period === 'PM' ? 'active' : ''
                    }`}
                    onClick={() => handleTimeChange('period', 'PM')}
                  >
                    PM
                  </button>
                </div>

                <div className="time-display">
                  <div className="time-section">
                    <button
                      type="button"
                      className="time-arrow up"
                      onClick={() => incrementTime('hour')}
                    >
                      ▲
                    </button>
                    <span className="time-number">
                      {selectedTime?.hour?.toString().padStart(2, '0') || '12'}
                    </span>
                    <button
                      type="button"
                      className="time-arrow down"
                      onClick={() => decrementTime('hour')}
                    >
                      ▼
                    </button>
                  </div>
                  <span className="time-separator">:</span>
                  <div className="time-section">
                    <button
                      type="button"
                      className="time-arrow up"
                      onClick={() => incrementTime('minute')}
                    >
                      ▲
                    </button>
                    <span className="time-number">
                      {selectedTime?.minute?.toString().padStart(2, '0') || '00'}
                    </span>
                    <button
                      type="button"
                      className="time-arrow down"
                      onClick={() => decrementTime('minute')}
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

</div>

        <Button
          id="search-button"
          variant="primary"
          className="btn-search"
          onClick={() => navigate('Map')}
        >
          Search
        </Button>
      </Form>
    </div>
  );
}

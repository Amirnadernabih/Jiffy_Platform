/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  // Sample events data matching the design
  const sampleEvents = [
    {
      id: 1,
      title: 'Morning run',
      location: 'Park',
      time: '8:00 AM',
      duration: '1h',
      date: getDateString(0), // Monday
      color: '#C8D4FF',
      participants: ['👤', '👤', '+3']
    },
    {
      id: 2,
      title: 'English',
      location: 'Zoom',
      time: '9:00 AM',
      duration: '1h',
      date: getDateString(1), // Tuesday
      color: '#C8D4FF',
      participants: ['👤', '👤', '+2']
    },
    {
      id: 3,
      title: 'Cardio dance',
      location: 'Gym',
      time: '8:00 AM',
      duration: '30 min',
      date: getDateString(2), // Wednesday
      color: 'linear-gradient(270deg, #000 0%, #000450 65.38%, #000 100%)',
      isHighlight: true
    },
    {
      id: 4,
      title: 'Meditation',
      location: 'Home',
      time: '8:00 AM',
      duration: '30 min',
      date: getDateString(4), // Friday
      color: '#E8F0FF'
    },
    {
      id: 5,
      title: 'Morning run',
      location: 'Park',
      time: '9:00 AM',
      duration: '1h',
      date: getDateString(4), // Friday
      color: '#FFE8B8',
      participants: ['👤', '👤', '+3']
    },
    {
      id: 6,
      title: 'Presentation',
      location: 'Office',
      time: '10:00 AM',
      duration: '45 min',
      date: getDateString(2), // Wednesday
      color: '#FFE8B8'
    },
    {
      id: 7,
      title: 'Coffee break',
      location: 'Cafe',
      time: '11:00 AM',
      duration: '30 min',
      date: getDateString(2), // Wednesday
      color: '#E8F0FF'
    },
    {
      id: 8,
      title: 'SMM Meeting',
      location: 'Zoom',
      time: '10:00 AM',
      duration: '1h',
      date: getDateString(3), // Thursday
      color: '#E8F0FF',
      participants: ['👤', '👤', '+2']
    }
  ];

  // Helper function to get date string for current week (Monday start)
  function getDateString(dayOffset) {
    const today = new Date();
    const monday = new Date(today);
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    monday.setDate(diff + dayOffset);
    return monday.toISOString().split('T')[0];
  }

  // Time slots for the week view
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'
  ];

  useEffect(() => {
    setEvents(sampleEvents);
  }, []);

  // Get week days (Monday to Friday)
  const getWeekDays = () => {
    const today = new Date();
    const monday = new Date(today);
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    monday.setDate(diff);

    const weekDays = [];
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    
    for (let i = 0; i < 5; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      
      weekDays.push({
        date: date.getDate().toString().padStart(2, '0'),
        day: dayNames[i],
        fullDate: date.toISOString().split('T')[0],
        isToday: date.toDateString() === new Date().toDateString()
      });
    }
    return weekDays;
  };

  const getEventsForDate = (date) => {
    return events.filter(event => event.date === date);
  };

  const getEventPosition = (time) => {
    const hour = parseInt(time.split(':')[0]);
    const baseHour = 8; // Starting from 8 AM
    return (hour - baseHour) * 120; // 120px per hour slot
  };

  const weekDays = getWeekDays();

  return (
    <div style={{
      background: 'white',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#333',
          margin: 0
        }}>
          Overview
        </h1>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize: '14px',
          color: '#666',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          Today
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      {/* Calendar Container */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        {/* Calendar Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 20px 20px 20px',
          borderRadius: '16px 16px 0 0',
          background: 'var(--bg-linear, linear-gradient(90deg, rgba(26, 181, 253, 0.15) 9.5%, rgba(21, 81, 249, 0.15) 49.25%, rgba(26, 181, 253, 0.15) 98.98%))'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#333',
            margin: 0
          }}>
            May 07 - 2024
          </h2>
          <div style={{
            background: '#f8f9fa',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '14px',
            color: '#666',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            May 05 - May 9
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* Week Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(5, 1fr)',
          marginBottom: '0'
        }}>
          <div style={{
            padding: '16px 12px',
            fontSize: '12px',
            color: '#999',
            fontWeight: '500',
            textAlign: 'center',
            background: 'var(--grey-background, #F8F8FC)'

          }}>
            GMT+5
          </div>
          {weekDays.map((day) => (
            <div key={day.date} style={{
              padding: '16px',
              textAlign: 'center',
              background: '#fafafa'
            }}>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#333',
                marginBottom: '4px'
              }}>
                {day.date}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666',
                fontWeight: '500'
              }}>
                {day.day}
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(5, 1fr)',
          background: 'white',
          minHeight: '500px'
        }}>
          {/* Time Column */}
          <div style={{ background: '#fafafa' }}>
            {timeSlots.map((time, index) => (
              <div key={time} style={{
                height: '120px',
                padding: '16px 8px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderBottom: index < timeSlots.length - 1 ? '1px solid #f0f0f0' : 'none'
              }}>
                <span style={{
                  fontSize: '11px',
                  color: '#999',
                  fontWeight: '500'
                }}>
                  {time}
                </span>
              </div>
            ))}
          </div>

          {/* Day Columns */}
          {weekDays.map((day) => (
            <div key={day.date} style={{
              background: 'white',
              position: 'relative'
            }}>
              {timeSlots.map((time, timeIndex) => (
                <div key={`${day.date}-${time}`} style={{
                  height: '120px',
                  background: 'var(--grey-background, #F8F8FC)',
                  borderBottom: timeIndex < timeSlots.length - 1 ? '1px solid #f0f0f0' : 'none'
                }} />
              ))}
              

              {/* Events for this day */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '8px',
                right: '8px',
                height: '100%'
              }}>
                {getEventsForDate(day.fullDate).map((event, index) => (
                  <div key={event.id} style={{
                    position: 'absolute',
                    top: `${getEventPosition(event.time)}px`,
                    left: `${index * 4}px`,
                    right: `${(getEventsForDate(day.fullDate).length - index - 1) * 4}px`,
                    minHeight: '90px',
                    background: event.color,
                    borderRadius: '12px',
                    padding: '12px',
                    cursor: 'pointer',
                    color: event.isHighlight ? 'white' : '#333',
                    fontSize: '13px',
                    fontWeight: '600',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: event.isHighlight ? 10 : 1
                  }}>
                    <div style={{ marginBottom: '8px' }}>
                      {event.title}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginBottom: '4px',
                      fontSize: '11px',
                      opacity: 0.8
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1C4.34315 1 3 2.34315 3 4C3 6.5 6 11 6 11S9 6.5 9 4C9 2.34315 7.65685 1 6 1Z" 
                              stroke="currentColor" strokeWidth="1" fill="none"/>
                        <circle cx="6" cy="4" r="1" fill="currentColor"/>
                      </svg>
                      {event.location}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginBottom: '8px',
                      fontSize: '11px',
                      opacity: 0.8
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <path d="M6 3V6L8 8" stroke="currentColor" strokeWidth="1"/>
                      </svg>
                      {event.duration}
                    </div>

                    {event.participants && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '-2px'
                      }}>
                        {event.participants.map((participant, idx) => (
                          <div key={idx} style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: event.isHighlight ? 'rgba(255,255,255,0.2)' : '#f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '8px',
                            border: '2px solid white',
                            marginLeft: idx === 0 ? '0' : '-6px',
                            color: event.isHighlight ? 'white' : '#666'
                          }}>
                            {participant}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
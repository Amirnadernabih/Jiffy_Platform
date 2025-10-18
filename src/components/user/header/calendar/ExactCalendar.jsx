import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExactCalendar = () => {
  const [selectedFromDate, setSelectedFromDate] = useState(17);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  // May 2021 calendar data
  const calendarDays = [
    { date: 25, isPrevMonth: true },
    { date: 26, isPrevMonth: true },
    { date: 27, isPrevMonth: true },
    { date: 28, isPrevMonth: true },
    { date: 29, isPrevMonth: true },
    { date: 30, isPrevMonth: true },
    { date: 1, isPrevMonth: false },
    { date: 2, isPrevMonth: false },
    { date: 3, isPrevMonth: false },
    { date: 4, isPrevMonth: false },
    { date: 5, isPrevMonth: false },
    { date: 6, isPrevMonth: false },
    { date: 7, isPrevMonth: false },
    { date: 8, isPrevMonth: false },
    { date: 9, isPrevMonth: false },
    { date: 10, isPrevMonth: false },
    { date: 11, isPrevMonth: false },
    { date: 12, isPrevMonth: false },
    { date: 13, isPrevMonth: false },
    { date: 14, isPrevMonth: false },
    { date: 15, isPrevMonth: false },
    { date: 16, isPrevMonth: false },
    { date: 17, isPrevMonth: false },
    { date: 18, isPrevMonth: false },
    { date: 19, isPrevMonth: false },
    { date: 20, isPrevMonth: false },
    { date: 21, isPrevMonth: false },
    { date: 22, isPrevMonth: false },
    { date: 23, isPrevMonth: false },
    { date: 24, isPrevMonth: false },
    { date: 25, isPrevMonth: false },
    { date: 26, isPrevMonth: false },
    { date: 27, isPrevMonth: false },
    { date: 28, isPrevMonth: false },
    { date: 29, isPrevMonth: false },
    { date: 30, isPrevMonth: false },
    { date: 31, isPrevMonth: false },
    { date: 1, isNextMonth: true },
    { date: 2, isNextMonth: true },
    { date: 3, isNextMonth: true },
    { date: 4, isNextMonth: true },
    { date: 5, isNextMonth: true },
  ];

  const handleDateClick = (day) => {
    if (!day.isPrevMonth && !day.isNextMonth) {
      if (!selectedFromDate || (selectedFromDate && selectedToDate)) {
        setSelectedFromDate(day.date);
        setSelectedToDate(null);
      } else {
        if (day.date > selectedFromDate) {
          setSelectedToDate(day.date);
        } else {
          setSelectedFromDate(day.date);
          setSelectedToDate(null);
        }
      }
    }
  };

  const isDateInRange = (date) => {
    if (!selectedFromDate || !selectedToDate) return false;
    const minDate = Math.min(selectedFromDate, selectedToDate);
    const maxDate = Math.max(selectedFromDate, selectedToDate);
    return date >= minDate && date <= maxDate;
  };

  const isDateSelected = (date) => {
    return date === selectedFromDate || date === selectedToDate;
  };

  const getDayLabel = () => {
    const today = new Date();
    const currentDay = today.getDate();
    
    if (selectedFromDate === currentDay) return 'Today';
    if (selectedFromDate === currentDay + 1) return 'Tomorrow';
    if (selectedFromDate === currentDay + 2) return 'Day After Tomorrow';
    return `Day ${selectedFromDate}`;
  };

  const handleBookNow = () => {
    setShowCard(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative">
        {/* Behind Card */}
        <div 
          className={`absolute inset-0 bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 ${
            showCard ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform translate-y-4'
          }`}
          style={{ zIndex: 0 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Hello Line</h3>
            <p className="text-gray-600 mb-6">
              Your selected date range is from May {selectedFromDate}, 2021 to {selectedToDate ? `May ${selectedToDate}, 2021` : 'Not selected'}.
            </p>
            <div className="flex flex-col items-center space-y-2">
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Button 1
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Button 2
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Container */}
        <div 
          className="relative transition-all duration-300"
          style={{ 
            zIndex: 1,
            transform: showCard ? 'translateY(-10px)' : 'translateY(0)'
          }}
        >
          <div 
            className="rounded-2xl shadow-xl p-6 max-w-md w-full"
            style={{
              background: 'linear-gradient(to top left, #E6E7FB, #ffffff)',
              borderRadius: '50px'
            }}
          >
            {/* AI-Assisted Badge */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">AI-Assisted</span>
            </div>

            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <ChevronLeft size={20} className="text-gray-600 cursor-pointer hover:text-gray-900" />
                <span className="text-lg font-bold text-gray-900">MAY 2021</span>
                <ChevronRight size={20} className="text-gray-600 cursor-pointer hover:text-gray-900" />
              </div>
              
              <div className="text-sm font-medium text-gray-700">
                {getDayLabel()}
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 mb-2" style={{ gap: '0px' }}>
              {daysOfWeek.map((day) => (
                <div 
                  key={day} 
                  className="text-center text-sm font-bold py-2"
                  style={{ color: '#111BF1' }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 mb-6" style={{ gap: '0px' }}>
              {calendarDays.map((day, index) => {
                const isSelected = !day.isPrevMonth && !day.isNextMonth && isDateSelected(day.date);
                const isInRange = !day.isPrevMonth && !day.isNextMonth && isDateInRange(day.date);
                const isHovered = !day.isPrevMonth && !day.isNextMonth && hoveredDate === day.date;
                
                // Check if this is the start or end of the range
                const isStartDate = !day.isPrevMonth && !day.isNextMonth && selectedFromDate && selectedToDate && day.date === Math.min(selectedFromDate, selectedToDate);
                const isEndDate = !day.isPrevMonth && !day.isNextMonth && selectedFromDate && selectedToDate && day.date === Math.max(selectedFromDate, selectedToDate);
                
                return (
                  <div key={index} className="relative">
                    <button
                      onClick={() => handleDateClick(day)}
                      onMouseEnter={() => setHoveredDate(day.date)}
                      onMouseLeave={() => setHoveredDate(null)}
                      className={`
                        w-10 h-10 flex items-center justify-center text-sm transition-all duration-200 relative z-10
                        ${day.isPrevMonth || day.isNextMonth 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : 'text-gray-700 cursor-pointer'
                        }
                      `}
                      style={{
                        ...(isSelected && {
                          borderRadius: '18px 18px 18px 0px',
                          background: 'radial-gradient(89.67% 89.67% at 28.57% 17.14%, #01CBFF 0%, #4B88F7 100%)',
                          boxShadow: '2.346px 18.767px 25.804px -2.346px rgba(223, 81, 21, 0.47)',
                          color: 'white',
                          fontWeight: '500'
                        }),
                        ...(isHovered && !isSelected && !isInRange && {
                          borderRadius: '8px',
                          border: '2px solid #7FCAF5',
                          background: 'white'
                        })
                      }}
                    >
                      {day.date}
                    </button>
                    {/* Background for range */}
                    {isInRange && (
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background: 'radial-gradient(89.67% 89.67% at 28.57% 17.14%, rgba(43, 159, 241, 0.12) 0%, rgba(0, 209, 255, 0.12) 100%)',
                          borderRadius: isStartDate ? '1.8rem 0 0 1.8rem' : isEndDate ? '0 1.8rem 1.8rem 0' : '0'
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Online Status */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Online</span>
            </div>

            {/* Book Now Button */}
            <div className="relative">
              <button 
                onClick={handleBookNow}
                className="text-white font-medium relative z-10 hover:opacity-90 transition-opacity"
                style={{
                  display: 'flex',
                  width: '180px',
                  padding: '10px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '0px 10px 10px 10px',
                  background: 'linear-gradient(to right, #1148FA, #2A9AF2)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(50%)',
                  margin: '0 auto',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExactCalendar;

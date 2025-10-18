import '../admin/styles/MainPage.css';

const MainPage = () => {
const HighArc = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#94E9B8"/>
      </svg>
);
const LowArc = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3463 3.63931C14.5455 3.83054 14.5519 4.14706 14.3607 4.34627L11.0007 7.84627C10.9064 7.94448 10.7761 8 10.64 8C10.5039 8 10.3736 7.94448 10.2793 7.84627L8.24 5.72199L5.82335 8.23933L7.54513 9.89223L2 11.5L3.38019 5.8939L5.10197 7.5468L7.87931 4.65373C7.97359 4.55552 8.10385 4.5 8.24 4.5C8.37615 4.5 8.50641 4.55552 8.60069 4.65373L10.64 6.77801L13.6393 3.65373C13.8305 3.45453 14.1471 3.44807 14.3463 3.63931Z" fill="black"/>
      </svg>
);

  const StatCard = ({ title, value, change, isPositive }) => (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="change-value">{change}</span>
          <span className="trend-icon">{isPositive ? <HighArc /> : <LowArc />}</span>
        </div>
      </div>
    </div>
  );

  const TrafficItem = ({ platform, percentage }) => (
    <div className="traffic-item">
      <span className="platform-name">{platform}</span>
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  const DeviceBar = ({ device, value, color }) => (
    <div className="device-bar">
      <div className="device-info">
        <div 
          className="device-color" 
          style={{ backgroundColor: color }}
        ></div>
        <span className="device-name">{device}</span>
      </div>
      <div 
        className="bar" 
        style={{ 
          height: `${value * 4}px`,
          backgroundColor: color 
        }}
      ></div>
    </div>
  );

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="page-title">Overview</h1>
        <span className="date-indicator">Today
           <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </span>
      </div>

      {/* Stats Cards Grid */}
      <div className="stats-grid">
        <StatCard 
          title="Views" 
          value="7,265" 
          change="11.01%" 
          isPositive={true} 
        />
        <StatCard 
          title="Visits" 
          value="3,671" 
          change="0.03%" 
          isPositive={false} 
        />
        <StatCard 
          title="New Users" 
          value="156" 
          change="15.03%" 
          isPositive={true} 
        />
        <StatCard 
          title="Active Users" 
          value="2,318" 
          change="6.08%" 
          isPositive={true} 
        />
      </div>

      {/* Main Charts Row */}
      <div className="charts-row">
        {/* Total Bookings Chart */}
        <div className="chart-card large">
          <div className="chart-header">
            <div className="chart-title-section d-flex justify-content-between">
              <h3 className="chart-title">Total Bookings</h3>
              <div className="chart-subtitle">
                <span className="subtitle-item">New Booking</span>
                <span className="subtitle-item">Repeat Bookings</span>
              </div>
            </div>
                    <div className="vertical-divider" />
            <div className="chart-filters">
              <button className="filter-btn active"><span>●</span> This Month</button>
              <button className="filter-btn"><span className='filter-btn-dot'>●</span> Last Month</button>
            </div>
          </div>
          <div className="chart-content">
            <div className="chart-area">
              <svg className="line-chart" viewBox="0 0 500 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1976d2" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#1976d2" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <polyline
                  points="50,150 80,130 120,110 160,120 200,90 240,100 280,80 320,95 360,85 400,100 450,105"
                  fill="none"
                  stroke="#1976d2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <polyline
                  points="50,150 80,130 120,110 160,120 200,90 240,100 280,80 320,95 360,85 400,100 450,105 450,200 50,200"
                  fill="url(#chartGradient)"
                  stroke="none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Traffic by Medium */}
        <div className="chart-card">
          <h3 className="chart-title">Traffic by Medium</h3>
          <div className="traffic-list">
            <TrafficItem platform="Google Business" percentage={95} />
            <TrafficItem platform="YouTube" percentage={80} />
            <TrafficItem platform="Instagram" percentage={70} />
            <TrafficItem platform="X" percentage={45} />
            <TrafficItem platform="Facebook" percentage={60} />
            <TrafficItem platform="TikTok" percentage={35} />
          </div>
        </div>
      </div>

    


{/* Booking Success Section */}
      <div className="bottom-charts-row">
        <div className="chart-card">
          <h3 className="chart-title">Booking Success</h3>
          <div className="booking-success-chart">
            <div className="success-bars">
              <div className="success-item">
                <div className="avatar-container">
                  <div className="avatar" style={{backgroundColor: '#9C27B0'}}>K</div>
                </div>
                <div className="success-bar">
                  <div className="bar-fill" style={{height: '60px', backgroundColor: '#9C27B0'}}></div>
                </div>
                <div className="success-value">180</div>
              </div>
              <div className="success-item">
                <div className="avatar-container">
                  <div className="avatar" style={{backgroundColor: '#E91E63'}}>P</div>
                </div>
                <div className="success-bar">
                  <div className="bar-fill" style={{height: '80px', backgroundColor: '#E91E63'}}></div>
                </div>
                <div className="success-value">220</div>
              </div>
              <div className="success-item">
                <div className="avatar-container">
                  <div className="avatar" style={{backgroundColor: '#212121'}}>R</div>
                </div>
                <div className="success-bar">
                  <div className="bar-fill" style={{height: '50px', backgroundColor: '#212121'}}></div>
                </div>
                <div className="success-value">150</div>
              </div>
              <div className="success-item">
                <div className="avatar-container">
                  <div className="avatar" style={{backgroundColor: '#2196F3'}}>G</div>
                </div>
                <div className="success-bar">
                  <div className="bar-fill" style={{height: '35px', backgroundColor: '#2196F3'}}></div>
                </div>
                <div className="success-value">90</div>
              </div>
              <div className="success-item">
                <div className="avatar-container">
                  <div className="avatar avatar-image">
                    <img src="/api/placeholder/24/24" alt="User" />
                  </div>
                </div>
                <div className="success-bar">
                  <div className="bar-fill" style={{height: '55px', backgroundColor: '#FF9800'}}></div>
                </div>
                <div className="success-value">160</div>
              </div>
              <div className="success-item">
                <div className="avatar-container">
                  <div className="avatar avatar-image">
                    <img src="/api/placeholder/24/24" alt="User" />
                  </div>
                </div>
                <div className="success-bar">
                  <div className="bar-fill" style={{height: '70px', backgroundColor: '#4CAF50'}}></div>
                </div>
                <div className="success-value">190</div>
              </div>
              <div className="success-item">
                <div className="avatar-container">
                  <div className="avatar avatar-image">
                    <img src="/api/placeholder/24/24" alt="User" />
                  </div>
                </div>
                <div className="success-bar">
                  <div className="bar-fill" style={{height: '45px', backgroundColor: '#795548'}}></div>
                </div>
                <div className="success-value">130</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings by Time & Date */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Bookings by Time & Date</h3>
            <select className="time-filter">
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
            </select>
          </div>
          <div className="heatmap-container">
            <div className="heatmap-grid">
              <div className="time-labels">
                <span>8-10</span>
                <span>10-12</span>
                <span>12-2</span>
                <span>2-4</span>
                <span>4-6</span>
                <span>6-8</span>
              </div>
              <div className="day-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
              <div className="heatmap-cells">
                {/* Row 1 - 8-10 */}
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#2563EB'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1D4ED8'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#3B82F6'}}></div>
                
                {/* Row 2 - 10-12 */}
                <div className="heatmap-cell" style={{backgroundColor: '#2563EB'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#BFDBFE'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1D4ED8'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#DBEAFE'}}></div>
                
                {/* Row 3 - 12-2 */}
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#BFDBFE'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1D4ED8'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                
                {/* Row 4 - 2-4 */}
                <div className="heatmap-cell" style={{backgroundColor: '#BFDBFE'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#BFDBFE'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#BFDBFE'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1D4ED8'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                
                {/* Row 5 - 4-6 */}
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#2563EB'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#4C1D95'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#BFDBFE'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#8B5CF6'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1D4ED8'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                
                {/* Row 6 - 6-8 */}
                <div className="heatmap-cell" style={{backgroundColor: '#2563EB'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1D4ED8'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#93C5FD'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#1E40AF'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#8B5CF6'}}></div>
                <div className="heatmap-cell" style={{backgroundColor: '#2563EB'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Bottom Charts Row */}
      <div className="bottom-charts-row">
        {/* Traffic by Device */}
        <div className="chart-card">
          <h3 className="chart-title">Traffic by Device</h3>
          <div className="device-chart">
            <div className="device-bars">
              <DeviceBar device="Linux" value={20} color="#9C27B0" />
              <DeviceBar device="Mac" value={30} color="#4CAF50" />
              <DeviceBar device="iOS" value={25} color="#212121" />
              <DeviceBar device="Windows" value={35} color="#2196F3" />
              <DeviceBar device="Android" value={15} color="#87CEEB" />
              <DeviceBar device="Other" value={25} color="#4CAF50" />
            </div>
          </div>
        </div>

        {/* Tasks Allocation Status */}
        <div className="chart-card">
          <h3 className="chart-title">Tasks Allocation Status</h3>
          <div className="donut-chart-container">
            <div className="donut-chart">
              <svg width="150" height="150" viewBox="0 0 150 150">
                <circle 
                  cx="75" 
                  cy="75" 
                  r="50" 
                  fill="none" 
                  stroke="#e5e7eb" 
                  strokeWidth="20"
                />
                <circle 
                  cx="75" 
                  cy="75" 
                  r="50" 
                  fill="none" 
                  stroke="#2196F3" 
                  strokeWidth="20"
                  strokeDasharray="163.36"
                  strokeDashoffset="78.41"
                  transform="rotate(-90 75 75)"
                />
                <circle 
                  cx="75" 
                  cy="75" 
                  r="50" 
                  fill="none" 
                  stroke="#212121" 
                  strokeWidth="20"
                  strokeDasharray="163.36"
                  strokeDashoffset="126.22"
                  transform="rotate(0 75 75)"
                />
                <circle 
                  cx="75" 
                  cy="75" 
                  r="50" 
                  fill="none" 
                  stroke="#4CAF50" 
                  strokeWidth="20"
                  strokeDasharray="163.36"
                  strokeDashoffset="137.26"
                  transform="rotate(60 75 75)"
                />
                <circle 
                  cx="75" 
                  cy="75" 
                  r="50" 
                  fill="none" 
                  stroke="#FF9800" 
                  strokeWidth="20"
                  strokeDasharray="163.36"
                  strokeDashoffset="145.03"
                  transform="rotate(120 75 75)"
                />
              </svg>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#2196F3'}}></div>
                <span>Assigned 52.1%</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#212121'}}></div>
                <span>Unassigned 22.8%</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#4CAF50'}}></div>
                <span>Completed 15.9%</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#FF9800'}}></div>
                <span>Overdue 11.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Marketing & SEO Section */}
      <div className="marketing-section">
        <div className="chart-card">
          <h3 className="chart-title">Marketing & SEO</h3>
          <div className="marketing-content">
            <p>Marketing and SEO analytics will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default MainPage;
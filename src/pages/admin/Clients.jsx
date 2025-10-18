/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  IconButton,
  Avatar,
  AvatarGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import { clientsData, timelineMockData, timelineDays } from '../../../mock_data/clientsMockData';
import './styles/Clients.css';

// Mix a hex color with white by `amount` (0..1) to create a lighter variant
const lightenColor = (hex, amount = 0.82) => {
  let c = (hex || '#5D5FEF').replace('#', '');
  if (c.length === 3) c = c.split('').map(ch => ch + ch).join('');
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const mix = ch => Math.round(ch + (255 - ch) * amount);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
};

const Clients = () => {
  const [activeTab, setActiveTab] = useState('Tasks');
  const [cards, setCards] = useState(clientsData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('');

  // Navigation state for each column
  const [columnPages, setColumnPages] = useState({
    'To Do': 0,
    'In Progress': 0,
    'Review': 0
  });

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    tagline: '',
    image: ''
  });

  const CARDS_PER_PAGE = 4;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddCard = (columnType) => {
    setSelectedColumn(columnType);
    const defaultType = getRandomTypeForColumn(columnType);
    setFormData({
      title: '',
      description: '',
      type: defaultType,
      tagline: '',
      image: ''
    });
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedColumn('');
    setFormData({
      title: '',
      description: '',
      type: '',
      tagline: '',
      image: ''
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitForm = () => {
    if (!formData.title.trim()) {
      alert('Please enter a title');
      return;
    }

    const newCard = {
      id: Date.now(),
      type: formData.type,
      title: formData.title,
      description: formData.description || "No description provided",
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      tagline: formData.tagline || "New Item",
      people: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
      ],
      image: formData.image || null
    };

    setCards(prev => [...prev, newCard]);
    handleCloseForm();
  };

  const getAllTypes = () => {
    return ['Online', 'Planning', 'Content', 'Research', 'RFQ'];
  };

  const getRandomTypeForColumn = (columnType) => {
    const allTypes = getAllTypes();
    return allTypes[0];
  };

  const getAvailableTypes = (columnType) => {
    return getAllTypes();
  };

  // Group cards by column type
  const groupCardsByColumn = () => {
    const columns = {
      'To Do': cards.filter(item => ['Online', 'Content', 'Research'].includes(item.type)),
      'In Progress': cards.filter(item => ['Planning', 'Online'].includes(item.type)),
      'Review': cards.filter(item => ['Content', 'RFQ'].includes(item.type))
    };
    return columns;
  };

  const getTypeColor = (type) => {
    const colors = {
      'Online': '#1EA7FF',
      'Planning': '#E97342',
      'Content': '#F59E0B',
      'Research': '#1EA7FF',
      'RFQ': '#5051F9'
    };
    return colors[type] || '#1EA7FF';
  };

  // Get Bootstrap color class based on task color
  const getBootstrapColorClass = (color) => {
    const colorMap = {
      '#5D5FEF': 'primary',    // Purple
      '#00D4AA': 'success',    // Green
      '#FF6B35': 'danger',     // Orange/Red
      '#1EA7FF': 'info',       // Blue
      '#F59E0B': 'warning'     // Yellow/Orange
    };
    return colorMap[color] || 'primary';
  };

  // Navigate through pages in a column
  const handleColumnNavigation = (columnTitle, direction) => {
    const columns = groupCardsByColumn();
    const totalCards = columns[columnTitle].length;
    const totalPages = Math.ceil(totalCards / CARDS_PER_PAGE);

    setColumnPages(prev => {
      const currentPage = prev[columnTitle];
      let newPage = currentPage;

      if (direction === 'next' && currentPage < totalPages - 1) {
        newPage = currentPage + 1;
      } else if (direction === 'prev' && currentPage > 0) {
        newPage = currentPage - 1;
      }

      return {
        ...prev,
        [columnTitle]: newPage
      };
    });
  };

  // Get visible cards for a column based on current page
  const getVisibleCards = (columnTitle, columnCards) => {
    const currentPage = columnPages[columnTitle] || 0;
    const startIndex = currentPage * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    return columnCards.slice(startIndex, endIndex);
  };

  // Get pagination info for a column
  const getColumnPaginationInfo = (columnTitle, columnCards) => {
    const totalCards = columnCards.length;
    const totalPages = Math.ceil(totalCards / CARDS_PER_PAGE);
    const currentPage = columnPages[columnTitle] || 0;

    return {
      totalCards,
      totalPages,
      currentPage,
      hasNext: currentPage < totalPages - 1,
      hasPrev: currentPage > 0,
      showNavigation: totalCards > CARDS_PER_PAGE
    };
  };

  const renderCard = (card) => (
    <div key={card.id} className="client-card">
      <div
        className="card-tag"
        style={{ backgroundColor: getTypeColor(card.type) }}
      >
        {card.type}
      </div>

      {card.image && (
        <div className="card-image-container">
          <img src={card.image} alt="" className="card-image" />
        </div>
      )}

      <div className="card-content">
        <h6 className="card-title">{card.title}</h6>
        <p className="card-description">{card.description}</p>
        <div className="card-date-main d-flex justify-content-between align-items-center">
          <span className="card-date">{card.date}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <AvatarGroup max={3} className="card-avatars">
            {card.people.map((person, index) => (
              <Avatar
                key={index}
                src={person}
                sx={{ width: 24, height: 24 }}
              />
            ))}
          </AvatarGroup>
        </div>
      </div>
    </div>
  );

  const renderColumnNavigation = (columnTitle, paginationInfo) => {
    if (!paginationInfo.showNavigation) return null;

    return (
      <div className="column-navigation" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12px',
        gap: '8px',
        padding: '8px',
        borderTop: '1px solid #e0e0e0'
      }}>
        <IconButton
          size="small"
          onClick={() => handleColumnNavigation(columnTitle, 'prev')}
          disabled={!paginationInfo.hasPrev}
          sx={{
            color: paginationInfo.hasPrev ? '#1976d2' : '#ccc',
            '&:disabled': {
              color: '#ccc'
            }
          }}
        >
          <KeyboardArrowUpIcon fontSize="small" />
        </IconButton>

        <span style={{
          fontSize: '0.75rem',
          color: '#666',
          minWidth: '60px',
          textAlign: 'center'
        }}>
          {paginationInfo.currentPage + 1} / {paginationInfo.totalPages}
        </span>

        <IconButton
          size="small"
          onClick={() => handleColumnNavigation(columnTitle, 'next')}
          disabled={!paginationInfo.hasNext}
          sx={{
            color: paginationInfo.hasNext ? '#1976d2' : '#ccc',
            '&:disabled': {
              color: '#ccc'
            }
          }}
        >
          <KeyboardArrowDownIcon fontSize="small" />
        </IconButton>
      </div>
    );
  };

  const columns = groupCardsByColumn();

  if (activeTab === 'Timeline') {
    return (
      <div className="client-main">
        {/* Top Navigation */}
        <nav className="navbar-custom">
          <div className="d-flex justify-content-between align-items-center w-100 flex-wrap">
            {/* Left side - Breadcrumb */}
            <div className="breadcrumb-nav d-flex align-items-center flex-wrap">
              <span
                className="breadcrumb-item clickable"
                onClick={() => handleTabClick('Tasks')}
                style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
              >
                Tasks
              </span>
              <span
                className="breadcrumb-separator"
                style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
              >
                |
              </span>
              <span
                className="breadcrumb-item active"
                style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
              >
                Timeline
              </span>
            </div>

            {/* Right side - Avatars and Today dropdown */}
            <div className="d-flex align-items-center flex-shrink-0">
              <AvatarGroup
                max={window.innerWidth < 768 ? 2 : 4}
                className="me-2 me-md-3"
                sx={{
                  '& .MuiAvatar-root': {
                    width: { xs: 28, sm: 32, md: 36 },
                    height: { xs: 28, sm: 32, md: 36 },
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                  }
                }}
              >
                <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" />
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" />
                <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" />
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
              </AvatarGroup>

              <div className="today-dropdown d-flex align-items-center">
                <span
                  className="me-1 d-none d-sm-inline"
                  style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                >
                  Today
                </span>
                <span
                  className="me-1 d-inline d-sm-none"
                  style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                >
                  T
                </span>
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Timeline Content */}
        <div className="timeline-container">
          {/* Timeline Header with Days */}
          <div className="timeline-header">
            {timelineDays.map((day) => (
              <div key={day.value} className="timeline-day-header">
                {day.label}
              </div>
            ))}
          </div>

          {/* Timeline Grid */}
          <div className="timeline-grid">
            {/* Grid Background Lines */}
            <div className="timeline-grid-lines">
              {timelineDays.map((day) => (
                <div key={day.value} className="timeline-grid-line"></div>
              ))}
            </div>

            {/* Task Bars — now split into solid + light track */}
            <div className="timeline-tasks">
              {timelineMockData.map((task) => {
                const startIndex = task.startDay - 6;
                const endIndex = task.endDay - 6;
                const width = ((endIndex - startIndex + 1) / timelineDays.length) * 100;
                const left = (startIndex / timelineDays.length) * 100;

                // ensure percentage is clamped and numeric
                const perc = Math.max(0, Math.min(100, Number(task.percentage) || 0));
                const light = lightenColor(task.color || '#5D5FEF', 0.82);
                const fillRadius = perc >= 99.9 ? '20px' : '20px 0 0 20px';

                return (
                  <div
                    key={task.id}
                    className="timeline-task-wrapper"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      top: `${(task.row - 1) * 80 + 20}px`,
                      height: '40px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.zIndex = '3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.zIndex = '2';
                    }}
                  >
                    <div
                      className="client-main-timeline-track"
                      style={{
                        backgroundColor: light,
                        height: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Solid fill layer (left) */}
                      <div
                        className="client-main-timeline-fill"
                        style={{
                          width: `${perc}%`,
                          backgroundColor: task.color,
                          borderRadius: fillRadius
                        }}
                      />

                      {/* Left content (inside the solid area) */}
                      <div
                        className="client-main-timeline-left"
                        style={{
                          width: `${perc}%`,
                          color: '#fff'
                        }}
                      >
                        <div className='dot-container'>
                           <div className="client-main-timeline-dot" />
                        </div>
                        <span className="client-main-timeline-title">{task.title}</span>
                      </div>

                      {/* Right content (remaining light area) */}
                      <div
                        className="client-main-timeline-right"
                        style={{
                          display: perc >= 100 ? 'none' : 'flex',
                          width: `${100 - perc}%`
                        }}
                      >
                        <div className="client-main-percentage-badge">{`${perc}%`}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="client-main">
      {/* Top Navigation */}
      <nav className="navbar-custom">
        <div className="d-flex justify-content-between align-items-center w-100 flex-wrap">
          {/* Left side - Breadcrumb */}
          <div className="breadcrumb-nav d-flex align-items-center flex-wrap">
            <span
              className="breadcrumb-item active"
              style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
            >
              Tasks
            </span>
            <span
              className="breadcrumb-separator"
              style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
            >
              |
            </span>
            <span
              className="breadcrumb-item clickable"
              onClick={() => handleTabClick('Timeline')}
              style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
            >
              Timeline
            </span>
          </div>

          {/* Right side - Avatars and Today dropdown */}
          <div className="d-flex align-items-center flex-shrink-0">
            <AvatarGroup
              max={window.innerWidth < 768 ? 2 : 4}
              className="me-2 me-md-3"
              sx={{
                '& .MuiAvatar-root': {
                  width: { xs: 28, sm: 32, md: 36 },
                  height: { xs: 28, sm: 32, md: 36 },
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                }
              }}
            >
              <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" />
              <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" />
              <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" />
              <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
            </AvatarGroup>

            <div className="today-dropdown d-flex align-items-center">
              <span
                className="me-1 d-none d-sm-inline"
                style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
              >
                Today
              </span>
              <span
                className="me-1 d-inline d-sm-none"
                style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
              >
                T
              </span>
              <KeyboardArrowDownIcon
                fontSize="small"
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - 3 Columns using Flexbox */}
      <div className="columns-container d-flex">
        {Object.entries(columns).map(([columnTitle, columnCards]) => {
          const paginationInfo = getColumnPaginationInfo(columnTitle, columnCards);
          const visibleCards = getVisibleCards(columnTitle, columnCards);

          return (
            <div key={columnTitle} className="column-wrapper">
              {/* Column Header */}
              <div className="column-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <h5 className="column-title">{columnTitle}</h5>
                  {paginationInfo.showNavigation && (
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#666',
                      backgroundColor: '#f5f5f5',
                      padding: '2px 6px',
                      borderRadius: '10px'
                    }}>
                      {paginationInfo.totalCards}
                    </span>
                  )}
                </div>
                <IconButton
                  size="small"
                  className="add-button"
                  onClick={() => handleAddCard(columnTitle)}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </div>

              {/* Cards */}
              <div className="column-content" style={{
                minHeight: '400px', // Maintain consistent height
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ flex: 1 }}>
                  {visibleCards.map(renderCard)}
                </div>

                {/* Navigation Controls */}
                {renderColumnNavigation(columnTitle, paginationInfo)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Task Form Dialog */}
      <Dialog
        open={isFormOpen}
        onClose={handleCloseForm}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: '12px',
            padding: '8px'
          }
        }}
      >
        <DialogTitle sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 2
        }}>
          <span>Add New Task to {selectedColumn}</span>
          <IconButton onClick={handleCloseForm} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Title Field */}
            <TextField
              label="Task Title"
              variant="outlined"
              fullWidth
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter task title"
              required
            />

            {/* Description Field */}
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter task description"
            />

            {/* Type Selection */}
            <FormControl fullWidth>
              <InputLabel>Task Type</InputLabel>
              <Select
                value={formData.type}
                label="Task Type"
                onChange={(e) => handleInputChange('type', e.target.value)}
              >
                {getAvailableTypes(selectedColumn).map((type) => (
                  <MenuItem key={type} value={type}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: getTypeColor(type)
                        }}
                      />
                      {type}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Tagline Field */}
            <TextField
              label="Tagline"
              variant="outlined"
              fullWidth
              value={formData.tagline}
              onChange={(e) => handleInputChange('tagline', e.target.value)}
              placeholder="Enter tagline (optional)"
            />

            {/* Image URL Field */}
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              placeholder="Enter image URL (optional)"
            />
          </div>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            onClick={handleCloseForm}
            variant="outlined"
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmitForm}
            variant="contained"
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0'
              }
            }}
          >
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Clients;

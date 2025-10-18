/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { mockChats } from '../../../mock_data/mockChats';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import './styles/Chat.css';


const Chat = () => {
  const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.444 18H2.555C2.249 18 2 17.776 2 17.5V2.5C2 2.224 2.249 2 2.555 2H7V6.15C7 7.722 8.217 9 9.714 9H14V17.5C14 17.776 13.75 18 13.444 18ZM13.649 7H9.714C9.32 7 9 6.619 9 6.15V2H9.112L13.649 7ZM15.74 6.328L10.296 0.328C10.107 0.119 9.838 0 9.555 0H2.555C1.146 0 0 1.122 0 2.5V17.5C0 18.878 1.146 20 2.555 20H13.444C14.853 20 16 18.878 16 17.5V7C16 6.751 15.907 6.512 15.74 6.328Z" fill="white"/>
    </svg>
  );

  const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M5 7C5.828 7 6.5 6.328 6.5 5.5C6.5 4.672 5.828 4 5 4C4.172 4 3.5 4.672 3.5 5.5C3.5 6.328 4.172 7 5 7ZM15 16H3.561L10.566 10.155C10.812 9.946 11.258 9.947 11.499 10.154L16 13.994V15C16 15.552 15.552 16 15 16ZM3 2H15C15.552 2 16 2.448 16 3V11.364L12.797 8.632C11.807 7.79 10.258 7.79 9.277 8.626L2 14.698V3C2 2.448 2.448 2 3 2ZM15 0H3C1.346 0 0 1.346 0 3V15C0 16.654 1.346 18 3 18H15C16.654 18 18 16.654 18 15V3C18 1.346 16.654 0 15 0Z" fill="white"/>
    </svg>
  );

  const GridIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 15.256C16 15.666 15.666 16 15.256 16H14V14H16V15.256ZM2 15.256V14H4V16H2.744C2.334 16 2 15.666 2 15.256ZM2.744 2H4V4H2V2.744C2 2.334 2.334 2 2.744 2ZM16 2.744V4H14V2H15.256C15.666 2 16 2.334 16 2.744ZM14 12H16V10H14V12ZM14 8H16V6H14V8ZM6 16H12V2H6V16ZM2 12H4V10H2V12ZM2 8H4V6H2V8ZM15.256 0H2.744C1.231 0 0 1.232 0 2.744V15.256C0 16.769 1.231 18 2.744 18H15.256C16.769 18 18 16.769 18 15.256V2.744C18 1.232 16.769 0 15.256 0Z" fill="white"/>
    </svg>
  );

  // Updated actions with custom SVG icons
  const actions = [
    { icon: <FileIcon />, name: 'File' },
    { icon: <ImageIcon />, name: 'Image' },
    { icon: <GridIcon />, name: 'Grid' },
  ];
  const { id, chatId } = useParams();
  const routeParam = chatId ?? id;
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [messages, setMessages] = useState(mockChats[0]?.messages ?? []);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  // set active chat index based on route param
  useEffect(() => {
    const num = routeParam ? Number(routeParam) : null;
    if (num != null) {
      const idx = mockChats.findIndex((c) => Number(c.id) === num);
      if (idx >= 0) setActiveIndex(idx);
    }
  }, [routeParam]);

  // load messages for activeIndex
  useEffect(() => {
    const chat = mockChats[activeIndex];
    setMessages(chat?.messages ? [...chat.messages] : []);
  }, [activeIndex]);

  // scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  const handleSendMessage = () => {
    const text = messageInput.trim();
    if (!text) return;

    const newMsg = {
      id: Date.now(),
      text,
      sent: true,
      timestamp: new Date().toLocaleTimeString(),
      isVoice: false,
      isFile: false
    };

    setMessages((prev) => [...prev, newMsg]);
    setMessageInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const activeChat = mockChats[activeIndex] || mockChats[0];

  return (
    <div className="chat-interface-wrapper">
      <div className="chat-interface w-100">
        {/* Left Panel - Chat List */}
        <div className="chat-sidebar">
          <div className="sidebar-header">
            <div>
              <div className="recent-chats-dropdown">
                <div>
                  <h2 className="sidebar-title">Chats</h2>
                </div>
                <div>
                  <span>Recent Chats</span>
                  <span className="dropdown-arrow"> ▼</span>
                </div>
              </div>
            </div>
            <button className="create-chat-btn">
              <span className="plus-icon">+</span>
              Create New Chat
            </button>
          </div>

          <div className="sidebar-controls">
            <div className="search-container">
              <svg
                style={{ width: '1.2rem', marginLeft: '2rem' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 740 740"
              >
                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="messages-dropdown">
                <span>Messages</span>
                <span className="dropdown-arrow"> ▼</span>
              </div>
            </div>
          </div>

          <div className="chat-list">
            {mockChats
              .filter((chat) =>
                chat.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((chat, idx) => (
                <div
                  key={chat.id}
                  role="button"
                  tabIndex={0}
                  className={`chat-item ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => {
                    // navigate so AdminLayout breadcrumb and right-sidebar highlight update
                    navigate(`/admin/chat/${chat.id}`);
                    setActiveIndex(idx);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/admin/chat/${chat.id}`);
                      setActiveIndex(idx);
                    }
                  }}
                >
                  <div className="chat-avatar-container">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="chat-avatar"
                    />
                    {chat.hasUnread && (
                      <div className="unread-indicator"></div>
                    )}
                  </div>

                  <div className="chat-content">
                    <div className="chat-header">
                      <span className="chat-name">{chat.name}</span>
                      <span className="chat-timestamp">{chat.timestamp}</span>
                    </div>
                    <div className="chat-preview-container">
                      {chat.isVoiceMessage && (
                        <span className="voice-icon">🎵</span>
                      )}
                      {chat.isTyping && (
                        <span className="typing-indicator">💬</span>
                      )}
                      <span className="chat-preview">{chat.preview}</span>
                    </div>
                    <div className="chat-status">
                      <span className="online-status">
                        last online {chat.lastOnline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right Panel - Active Chat */}
        <div className="chat-main">
          <div className="chat-main-header">
            <div className="contact-info">
              <img
                src={activeChat.avatar}
                alt={activeChat.name}
                className="contact-avatar"
              />
              <div className="contact-details">
                <h3 className="contact-name">{activeChat.name}</h3>
                <span className="contact-status">
                  last online {activeChat.lastOnline}
                </span>
              </div>
            </div>
            <div className="chat-actions">
              <button className="action-btn">📎</button>
              <button className="action-btn">⋯</button>
            </div>
          </div>

          <div className="messages-container">
            <div className="messages-list">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.sent ? 'sent' : 'received'
                  }`}
                >
                  <div className="message-content">
                    {message.isVoice ? (
                      <div className="voice-message">
                        <span className="voice-icon">🎵</span>
                        <span>{message.text}</span>
                        <div className="voice-controls">
                          <button className="voice-btn">📁</button>
                          <button className="voice-btn">📷</button>
                        </div>
                      </div>
                    ) : message.isFile ? (
                      <div className="file-message">
                        <div className="file-icon">📄</div>
                        <div className="file-info">
                          <span className="file-name">{message.text}</span>
                          {message.fileSize && (
                            <span className="file-size">{message.fileSize}</span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <span className="message-text">{message.text}</span>
                    )}
                  </div>
                  <div className="message-timestamp">{message.timestamp}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>


<div className="chat-input-container">
  <div className="chat-input-wrapper">
    <div className="speeddial-container">
                <Box sx={{ 
                  transform: 'translateZ(0px)', 
                  width: '35px', 
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <SpeedDial
                    ariaLabel="SpeedDial controlled open example"
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                    sx={{
                      position: 'static',
                      '& .MuiSpeedDial-fab': {
                        width: 35,
                        height: 35,
                        minHeight: 35,
                        background: 'linear-gradient(326deg, #2A8BF2 14.76%, #7CB8F7 87.3%)',
                        '&:hover': {
                          background: 'linear-gradient(326deg, #1976D2 14.76%, #64B5F6 87.3%)',
                        }
                      }
                    }}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        slotProps={{
                          tooltip: {
                            title: action.name,
                          },
                        }}
                        onClick={handleClose}
                        sx={{
                          '& .MuiSpeedDialAction-fab': {
                            backgroundColor: '#2A8BF2',
                            filter: 'drop-shadow(0 5px 25px rgba(42, 139, 242, 0.10)) drop-shadow(0 7px 25px rgba(42, 139, 242, 0.10)) drop-shadow(0 10px 15px rgba(42, 139, 242, 0.20))',
                            '&:hover': {
                              backgroundColor: '#1976D2',
                              filter: 'drop-shadow(0 8px 30px rgba(42, 139, 242, 0.15)) drop-shadow(0 10px 30px rgba(42, 139, 242, 0.15)) drop-shadow(0 12px 18px rgba(42, 139, 242, 0.25))',
                            }
                          }
                        }}
                      />
                    ))}
                  </SpeedDial>
                </Box>
    </div>
    <input
      type="text"
      placeholder="Type a message here..."
      value={messageInput}
      onChange={(e) => setMessageInput(e.target.value)}
      onKeyDown={handleKeyPress}
      className="message-input"
    />
    <button className="send-btn" onClick={handleSendMessage}>
      <span className="send-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3883 15.3335C10.3708 15.3335 10.3542 15.3327 10.3375 15.3319C9.96085 15.3094 9.64668 15.036 9.57168 14.666L8.29002 8.36021C8.22335 8.03188 7.96752 7.77604 7.63918 7.70938L1.33335 6.42688C0.963349 6.35271 0.690016 6.03854 0.667516 5.66188C0.645016 5.28438 0.877516 4.93938 1.23585 4.82104L14.5692 0.376877C14.8683 0.275211 15.1983 0.353544 15.4217 0.577711C15.645 0.801044 15.7225 1.13104 15.6234 1.43021L11.1783 14.7635C11.065 15.106 10.745 15.3335 10.3883 15.3335Z" fill="white"/>
        </svg>
      </span>
    </button>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
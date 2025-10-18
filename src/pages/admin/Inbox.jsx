import React, { useState } from 'react';
import './styles/Inbox.css';
import { mockEmail } from '../../../mock_data/InboxMockData';


        const mockEmails = [
          {
            id: 1,
            sender: "Harmony Audio",
            senderEmail: "info@harmonyaudio.com",
            subject: "Sound System Confirmation",
            preview: "We'd like to confirm the delivery schedule for the sound setup.",
            date: "02:30 PM",
            fullDate: "February 20, 2025",
            category: "Sponsor",
            isRead: true,
            avatar: "HA"
          },
          {
            id: 2,
            sender: "Patrick Cooper",
            senderEmail: "patrick@events.com",
            subject: "Feedback on Champions League Event",
            preview: "The event was great, but the seating arrangements could be improved.",
            date: "01:45 PM",
            fullDate: "February 20, 2025",
            category: "Customer",
            isRead: true,
            avatar: "PC"
          },
          {
            id: 3,
            sender: "Marcus Rawless",
            senderEmail: "marcus@billing.com",
            subject: "Request for Invoice Update",
            preview: "Could you please update the billing address on my invoices?",
            date: "11:30 AM",
            fullDate: "February 20, 2025",
            category: "Customer",
            isRead: false,
            avatar: "MR"
          },
          {
            id: 4,
            sender: "Alicia Smithson",
            senderEmail: "alicia@ticketing.com",
            subject: "Query Regarding Ticket Availability",
            preview: "Hi, I'd like to confirm if additional Premium tickets are available for the event.",
            date: "10:15 AM",
            fullDate: "February 20, 2025",
            category: "Customer",
            isRead: true,
            avatar: "AS"
          },
          {
            id: 5,
            sender: "Jackson Moore",
            senderEmail: "jackson@symphony.com",
            subject: "Confirmation of Symphony Tickets",
            preview: "I've received the tickets. Thanks for the prompt confirmation!",
            date: "Yesterday",
            fullDate: "February 19, 2025",
            category: "Customer",
            isRead: false,
            avatar: "JM"
          },
          {
            id: 6,
            sender: "FreshFlavors Catering",
            senderEmail: "info@freshflavors.com",
            subject: "Final Menu Selection",
            preview: "Please confirm the final menu selections for the event.",
            date: "Feb 18",
            fullDate: "February 18, 2025",
            category: "Partner",
            isRead: true,
            avatar: "FC"
          },
          {
            id: 7,
            sender: "Clara Smithson",
            senderEmail: "clara@performer.com",
            subject: "Performance Schedule Update",
            preview: "There's been a slight change to the performance timing. Please review the updated schedule.",
            date: "Feb 17",
            fullDate: "February 17, 2025",
            category: "Performer",
            isRead: true,
            avatar: "CS"
          },
          {
            id: 8,
            sender: "Tech Solutions Pro",
            senderEmail: "support@techsolutions.com",
            subject: "Equipment Rental Confirmation",
            preview: "Your AV equipment rental has been confirmed for the event dates.",
            date: "Feb 16",
            fullDate: "February 16, 2025",
            category: "Sponsor",
            isRead: true,
            avatar: "TS"
          }
        ];

        const INBOXIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.584 2.37596C11.836 2.20801 12.1642 2.20801 12.4161 2.37596L21.4161 8.37596C21.6247 8.51506 21.7501 8.74924 21.7501 9V18.75C21.7501 19.1478 21.592 19.5294 21.3107 19.8107C21.0294 20.092 20.6479 20.25 20.2501 20.25H3.75006C3.35224 20.25 2.9707 20.092 2.6894 19.8107C2.40809 19.5294 2.25006 19.1478 2.25006 18.75V9C2.25006 8.74924 2.37538 8.51506 2.58403 8.37596L11.584 2.37596ZM3.75006 9.40139V18.75H20.2501V9.40139L12.0001 3.90139L3.75006 9.40139Z" fill="#E6EEFF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.972 13.8172C11.211 14.1555 11.1305 14.6235 10.7922 14.8625L3.66723 19.8969C3.32894 20.1359 2.86094 20.0555 2.62191 19.7172C2.38288 19.3789 2.46335 18.9109 2.80164 18.6719L9.92664 13.6375C10.2649 13.3984 10.7329 13.4789 10.972 13.8172Z" fill="#E6EEFF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0282 13.8172C13.2672 13.4789 13.7352 13.3984 14.0735 13.6375L21.1985 18.6719C21.5368 18.9109 21.6172 19.3789 21.3782 19.7172C21.1392 20.0555 20.6712 20.1359 20.3329 19.8969L13.2079 14.8625C12.8696 14.6235 12.7891 14.1555 13.0282 13.8172Z" fill="#E6EEFF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3895 8.56444C2.63005 8.22723 3.09841 8.14888 3.43562 8.38944L10.5995 13.5H13.4006L20.5645 8.38944C20.9017 8.14888 21.3701 8.22723 21.6106 8.56444C21.8512 8.90164 21.7728 9.37001 21.4356 9.61056L14.0762 14.8606C13.9491 14.9513 13.7968 15 13.6407 15H10.3594C10.2033 15 10.051 14.9513 9.92387 14.8606L2.5645 9.61056C2.22729 9.37001 2.14894 8.90164 2.3895 8.56444Z" fill="#E6EEFF"/>
    </svg>
        );
        const STARREDIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22.4225 9.118C22.3287 8.82974 22.1517 8.57568 21.9138 8.38783C21.6759 8.19998 21.3877 8.08674 21.0856 8.06237L15.5543 7.61612L13.4187 2.45143C13.3032 2.17001 13.1066 1.92929 12.854 1.75987C12.6013 1.59046 12.304 1.5 11.9998 1.5C11.6956 1.5 11.3983 1.59046 11.1456 1.75987C10.893 1.92929 10.6964 2.17001 10.5809 2.45143L8.44714 7.61518L2.91308 8.06237C2.61043 8.08797 2.32207 8.20231 2.08412 8.39106C1.84617 8.57982 1.66921 8.8346 1.57542 9.12349C1.48163 9.41237 1.47517 9.72251 1.55686 10.015C1.63855 10.3076 1.80475 10.5695 2.03464 10.768L6.25339 14.4083L4.96808 19.8514C4.8962 20.1471 4.9138 20.4576 5.01865 20.7432C5.1235 21.0289 5.31087 21.277 5.55698 21.456C5.80309 21.635 6.09684 21.7369 6.40093 21.7486C6.70503 21.7604 7.00576 21.6815 7.26496 21.5221L11.9993 18.6083L16.7365 21.5221C16.9958 21.6796 17.2959 21.757 17.5991 21.7444C17.9022 21.7317 18.1949 21.6297 18.4401 21.451C18.6854 21.2724 18.8724 21.0252 18.9774 20.7406C19.0825 20.4559 19.101 20.1466 19.0306 19.8514L17.7406 14.4074L21.9593 10.7671C22.1911 10.5689 22.3588 10.3064 22.4412 10.0128C22.5237 9.71927 22.5172 9.40784 22.4225 9.118ZM20.9843 9.63081L16.4187 13.5683C16.3146 13.6581 16.2371 13.7747 16.1948 13.9055C16.1525 14.0362 16.1469 14.1761 16.1787 14.3099L17.5737 20.1974C17.5773 20.2055 17.5777 20.2147 17.5747 20.2231C17.5717 20.2314 17.5657 20.2383 17.5578 20.2424C17.5409 20.2555 17.5362 20.2527 17.5221 20.2424L12.3921 17.0877C12.274 17.015 12.138 16.9766 11.9993 16.9766C11.8606 16.9766 11.7247 17.015 11.6065 17.0877L6.47652 20.2442C6.46246 20.2527 6.45871 20.2555 6.44089 20.2442C6.43298 20.2402 6.42692 20.2333 6.42395 20.2249C6.42099 20.2166 6.42135 20.2074 6.42496 20.1992L7.81996 14.3117C7.85175 14.178 7.84618 14.0381 7.80385 13.9073C7.76153 13.7766 7.68407 13.6599 7.57996 13.5702L3.01433 9.63268C3.00308 9.62331 2.99277 9.61487 3.00214 9.58581C3.01152 9.55675 3.01902 9.5605 3.03308 9.55862L9.02558 9.07487C9.16303 9.06308 9.29456 9.01361 9.40571 8.9319C9.51686 8.8502 9.60332 8.73941 9.65558 8.61175L11.9637 3.02331C11.9712 3.00737 11.974 2.99987 11.9965 2.99987C12.019 2.99987 12.0218 3.00737 12.0293 3.02331L14.3431 8.61175C14.3958 8.73946 14.4828 8.85012 14.5945 8.93152C14.7062 9.01291 14.8382 9.06187 14.9759 9.073L20.9684 9.55675C20.9825 9.55675 20.9909 9.55675 20.9993 9.58393C21.0078 9.61112 20.9993 9.62143 20.9843 9.63081Z" fill="#1E1E20"/>
        </svg>
        );
        const SENTIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.2309 1.63935C4.53413 1.60888 4.83945 1.6715 5.1062 1.81887L5.11004 1.82099L20.941 10.6879L20.943 10.689C21.1766 10.8187 21.3713 11.0084 21.507 11.2385C21.643 11.4694 21.7148 11.7324 21.7148 12.0004C21.7148 12.2683 21.643 12.5314 21.507 12.7622C21.3713 12.9923 21.1766 13.1821 20.943 13.3117L20.941 13.3129L5.10621 22.1818C4.83945 22.3292 4.53413 22.3918 4.2309 22.3614C3.92767 22.3309 3.64091 22.2088 3.4088 22.0113C3.1767 21.8138 3.01026 21.5503 2.93163 21.2558C2.85311 20.9618 2.86591 20.6507 2.96833 20.3641L5.95004 12.0004L2.9687 3.63762C2.86614 3.35088 2.85307 3.03911 2.93163 2.74487C3.01026 2.45043 3.1767 2.18692 3.4088 1.98942C3.64091 1.79193 3.92767 1.66982 4.2309 1.63935ZM20.2114 11.9985L4.38086 3.13184L4.38123 3.13288L7.35817 11.4833C7.48766 11.8158 7.48766 12.1849 7.35817 12.5174L4.38086 20.8689L20.2114 12.0023L20.2148 12.0004L20.2114 11.9985Z" fill="#1E1E20"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99978 12.0004C5.99978 11.5861 6.33557 11.2504 6.74978 11.2504H12.7498C13.164 11.2504 13.4998 11.5861 13.4998 12.0004C13.4998 12.4146 13.164 12.7504 12.7498 12.7504H6.74978C6.33557 12.7504 5.99978 12.4146 5.99978 12.0004Z" fill="#1E1E20"/>
        </svg>
        );
        const DRAFTSIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.18934 2.68934C4.47064 2.40804 4.85217 2.25 5.25 2.25H14.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L20.0303 7.71967C20.171 7.86032 20.25 8.05109 20.25 8.25V20.25C20.25 20.6478 20.092 21.0294 19.8107 21.3107C19.5294 21.592 19.1478 21.75 18.75 21.75H5.25C4.85218 21.75 4.47065 21.592 4.18934 21.3107C3.90804 21.0294 3.75 20.6478 3.75 20.25V3.75C3.75 3.35217 3.90804 2.97064 4.18934 2.68934ZM13.9393 3.75L5.25 3.75L5.25 20.25H18.75V8.56066L13.9393 3.75Z" fill="#1E1E20"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 2.25C14.6642 2.25 15 2.58579 15 3V7.5H19.5C19.9142 7.5 20.25 7.83579 20.25 8.25C20.25 8.66421 19.9142 9 19.5 9H14.25C13.8358 9 13.5 8.66421 13.5 8.25V3C13.5 2.58579 13.8358 2.25 14.25 2.25Z" fill="#1E1E20"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12.75C8.25 12.3358 8.58579 12 9 12H15C15.4142 12 15.75 12.3358 15.75 12.75C15.75 13.1642 15.4142 13.5 15 13.5H9C8.58579 13.5 8.25 13.1642 8.25 12.75Z" fill="#1E1E20"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 15.75C8.25 15.3358 8.58579 15 9 15H15C15.4142 15 15.75 15.3358 15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5H9C8.58579 16.5 8.25 16.1642 8.25 15.75Z" fill="#1E1E20"/>
        </svg>
        );
        const SPAMIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V7.5C11.25 7.08579 11.5858 6.75 12 6.75Z" fill="#1E1E20"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4208 2.25C15.6163 2.24952 15.8099 2.2875 15.9908 2.36177C16.1721 2.43623 16.3369 2.54573 16.4759 2.68399L16.4772 2.6853L21.316 7.52411C21.4543 7.66306 21.5638 7.8279 21.6382 8.00922C21.7125 8.19009 21.7505 8.38381 21.75 8.57934L21.75 8.58076L21.75 8.57813V8.57934V15.3952C21.75 15.793 21.592 16.1745 21.3107 16.4559L16.4558 21.3107C16.1745 21.592 15.793 21.75 15.3952 21.75H8.56066C8.16283 21.75 7.7813 21.592 7.5 21.3107L2.68934 16.5C2.40804 16.2187 2.25 15.8372 2.25 15.4393V8.52622C2.25 8.12564 2.41022 7.7417 2.69497 7.45995L7.52206 2.68374C7.80289 2.40587 8.18201 2.25 8.57709 2.25H15.4208ZM15.4206 3.75L20.25 8.57942V15.3952L15.3952 20.25H8.56066L3.75 15.4393V8.52622L8.57709 3.75H15.4206Z" fill="#1E1E20"/>
            <path d="M12 17.25C12.6213 17.25 13.125 16.7463 13.125 16.125C13.125 15.5037 12.6213 15 12 15C11.3787 15 10.875 15.5037 10.875 16.125C10.875 16.7463 11.3787 17.25 12 17.25Z" fill="#1E1E20"/>
        </svg>
        );
        const TRASHIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="#1E1E20"/>
        </svg>
        );

function Inbox() {
    const [emails, setEmails] = useState(mockEmails);
    const [selectedEmail, setSelectedEmail] = useState(mockEmails[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    


  const filteredEmails = emails.filter(email =>
    email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.sender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sidebarItems = [
    { icon: <INBOXIcon />, label: 'Inbox' },
    { icon: <STARREDIcon />, label: 'Starred' },
    { icon: <SENTIcon />, label: 'Sent' },
    { icon: <DRAFTSIcon />, label: 'Drafts' },
    { icon: <SPAMIcon />, label: 'Spam' },
    { icon: <TRASHIcon />, label: 'Trash' }
  ];
  

  const labels = [
    { label: 'Customer', color: '#3f51b5' },
    { label: 'Sponsor', color: '#4caf50' },
    { label: 'Partner', color: '#ff9800' }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Customer': return '#3f51b5';
      case 'Sponsor': return '#4caf50';
      case 'Partner': return '#ff9800';
      case 'Performer': return '#9c27b0';
      default: return '#757575';
    }
  };

  return (
    <div className="inbox-page">
      <div className="inbox-container">
        <div className="row">
          {/* Column 1 - Split into two sections (col-2 equivalent) */}
          <div className="col-2 hide-scrollbar">
            {/* Top section - Navigation */}
            <div className="sidebar-section">
              <div className="nav-list">
                {sidebarItems.map((item, index) => (
                  <button
                    key={index}
                    className={`nav-button ${index === activeNavIndex ? 'active' : ''}`}
                    onClick={() => setActiveNavIndex(index)}
                    aria-pressed={index === activeNavIndex}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom section - Labels */}
            <div className="sidebar-section">
              <h3 className="section-title">Labels</h3>
              <div className="labels-list">
                {labels.map((label, index) => (
                  <div key={index} className="label-item">
                    <div 
                      className="label-color" 
                      style={{ backgroundColor: label.color }}
                    ></div>
                    {label.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Email List (col-4 equivalent) */}
          <div className="col-4">
            <div className="email-list-container">
              {/* Search and header */}
              <div className="email-list-header d-flex">
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Search for messages"
                      className="search-input"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-icon-btn" aria-label="Search messages">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.15625 2.8125C5.20498 2.8125 2.8125 5.20498 2.8125 8.15625C2.8125 11.1075 5.20498 13.5 8.15625 13.5C11.1075 13.5 13.5 11.1075 13.5 8.15625C13.5 5.20498 11.1075 2.8125 8.15625 2.8125ZM1.6875 8.15625C1.6875 4.58366 4.58366 1.6875 8.15625 1.6875C11.7288 1.6875 14.625 4.58366 14.625 8.15625C14.625 11.7288 11.7288 14.625 8.15625 14.625C4.58366 14.625 1.6875 11.7288 1.6875 8.15625Z" fill="#434345"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9351 11.9351C12.1547 11.7154 12.5109 11.7154 12.7306 11.9351L16.1477 15.3523C16.3674 15.5719 16.3674 15.9281 16.1477 16.1477C15.9281 16.3674 15.5719 16.3674 15.3523 16.1477L11.9351 12.7306C11.7154 12.5109 11.7154 12.1547 11.9351 11.9351Z" fill="#434345"/>
                      </svg>
                    </button>
                  </div>
                  <div className="header-controls">
                    <div className="header-buttons">
                      <button className="header-btn settings-btn" aria-label="Settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.5 13.4375C2.5 13.0923 2.77982 12.8125 3.125 12.8125H10.625C10.9702 12.8125 11.25 13.0923 11.25 13.4375C11.25 13.7827 10.9702 14.0625 10.625 14.0625H3.125C2.77982 14.0625 2.5 13.7827 2.5 13.4375Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.5 13.4375C12.5 13.0923 12.7798 12.8125 13.125 12.8125H16.875C17.2202 12.8125 17.5 13.0923 17.5 13.4375C17.5 13.7827 17.2202 14.0625 16.875 14.0625H13.125C12.7798 14.0625 12.5 13.7827 12.5 13.4375Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6.5625C2.5 6.21732 2.77982 5.9375 3.125 5.9375H5.625C5.97018 5.9375 6.25 6.21732 6.25 6.5625C6.25 6.90768 5.97018 7.1875 5.625 7.1875H3.125C2.77982 7.1875 2.5 6.90768 2.5 6.5625Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6.5625C7.5 6.21732 7.77982 5.9375 8.125 5.9375H16.875C17.2202 5.9375 17.5 6.21732 17.5 6.5625C17.5 6.90768 17.2202 7.1875 16.875 7.1875H8.125C7.77982 7.1875 7.5 6.90768 7.5 6.5625Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.125 4.0625C8.47018 4.0625 8.75 4.34232 8.75 4.6875V8.4375C8.75 8.78268 8.47018 9.0625 8.125 9.0625C7.77982 9.0625 7.5 8.78268 7.5 8.4375V4.6875C7.5 4.34232 7.77982 4.0625 8.125 4.0625Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.125 10.9375C13.4702 10.9375 13.75 11.2173 13.75 11.5625V15.3125C13.75 15.6577 13.4702 15.9375 13.125 15.9375C12.7798 15.9375 12.5 15.6577 12.5 15.3125V11.5625C12.5 11.2173 12.7798 10.9375 13.125 10.9375Z" fill="white"/>
                        </svg>
                      </button>
                      <button className="header-btn add-btn" aria-label="Add new item">
                        +
                      </button>
                    </div>
                  </div>
              </div>

              {/* Email list */}
              <div className="email-list hide-scrollbar">
                {filteredEmails.map((email) => (
                  <div
                    key={email.id}
                    className={`email-item ${!email.isRead ? 'unread' : ''} ${selectedEmail.id === email.id ? 'selected' : ''}`}
                    onClick={() => {
                        setSelectedEmail(email);
                        setEmails((prev) =>
                          prev.map((e) =>
                            e.id === email.id ? { ...e, isRead: true } : e
                          )
                        );
                      }}
                    >
                    <div className="email-avatar">
                      {email.avatar}
                    </div>
                    <div className="email-content">
                      <div className="email-header">
                        <span className={`sender-name ${!email.isRead ? 'unread' : ''}`}>
                          {email.sender}
                        </span>
                        <span 
                          className="category-chip" 
                          style={{ backgroundColor: getCategoryColor(email.category) }}
                        >
                          {email.category}
                        </span>
                        <span className="email-date">{email.date}</span>
                      </div>
                      <div className={`email-subject ${!email.isRead ? 'unread' : ''}`}>
                        {email.subject}
                      </div>
                      <div className="email-preview">
                        {email.preview}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3 - Email Content (col-6 equivalent) */}
          <div className="col-6">
            <div className="email-content-container">
              {/* Top Navigation Bar */}
              <div className="email-navigation">
                <div className="nav-left">
                  <button className="nav-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625L3.125 10.625C2.77982 10.625 2.5 10.3452 2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375L16.875 9.375C17.2202 9.375 17.5 9.65482 17.5 10Z" fill="#9F9FA1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19194 3.93306C9.43602 4.17714 9.43602 4.57286 9.19194 4.81694L4.00888 10L9.19194 15.1831C9.43602 15.4271 9.43602 15.8229 9.19194 16.0669C8.94786 16.311 8.55214 16.311 8.30806 16.0669L2.68306 10.4419C2.43898 10.1979 2.43898 9.80213 2.68306 9.55806L8.30806 3.93306C8.55214 3.68898 8.94786 3.68898 9.19194 3.93306Z" fill="#9F9FA1"/>
                      </svg>
                  </button>
                  <button className="nav-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3.75C2.5 3.05964 3.05964 2.5 3.75 2.5H16.25C16.9404 2.5 17.5 3.05964 17.5 3.75V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V3.75ZM16.25 3.75H3.75V16.25H16.25V3.75Z" fill="#9F9FA1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90962 8.78462C7.1537 8.54054 7.54943 8.54054 7.7935 8.78462L10 10.9911L12.2065 8.78462C12.4506 8.54054 12.8463 8.54054 13.0904 8.78462C13.3345 9.0287 13.3345 9.42443 13.0904 9.6685L10.4419 12.3169C10.3247 12.4342 10.1658 12.5 10 12.5C9.83424 12.5 9.67527 12.4342 9.55806 12.3169L6.90962 9.6685C6.66554 9.42443 6.66554 9.0287 6.90962 8.78462Z" fill="#9F9FA1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10.3452 5 10.625 5.27982 10.625 5.625V11.875C10.625 12.2202 10.3452 12.5 10 12.5C9.65482 12.5 9.375 12.2202 9.375 11.875V5.625C9.375 5.27982 9.65482 5 10 5Z" fill="#9F9FA1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 12.5C2.5 12.1548 2.77982 11.875 3.125 11.875H5.99112C6.3223 11.875 6.64012 12.0062 6.87478 12.2409L8.38388 13.75H11.6161L13.1252 12.2409C13.3599 12.0062 13.6777 11.875 14.0089 11.875H16.875C17.2202 11.875 17.5 12.1548 17.5 12.5C17.5 12.8452 17.2202 13.125 16.875 13.125H14.0089L12.4995 14.6344C12.2645 14.8694 11.9469 15 11.6161 15H8.38388C8.05314 15 7.73549 14.8694 7.50052 14.6344L5.99112 13.125H3.125C2.77982 13.125 2.5 12.8452 2.5 12.5Z" fill="#9F9FA1"/>
                      </svg>
                  </button>
                  <button className="nav-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.875 3.75H13.75V3.125C13.75 2.62772 13.5525 2.15081 13.2008 1.79917C12.8492 1.44754 12.3723 1.25 11.875 1.25H8.125C7.62772 1.25 7.15081 1.44754 6.79917 1.79917C6.44754 2.15081 6.25 2.62772 6.25 3.125V3.75H3.125C2.95924 3.75 2.80027 3.81585 2.68306 3.93306C2.56585 4.05027 2.5 4.20924 2.5 4.375C2.5 4.54076 2.56585 4.69973 2.68306 4.81694C2.80027 4.93415 2.95924 5 3.125 5H3.75V16.25C3.75 16.5815 3.8817 16.8995 4.11612 17.1339C4.35054 17.3683 4.66848 17.5 5 17.5H15C15.3315 17.5 15.6495 17.3683 15.8839 17.1339C16.1183 16.8995 16.25 16.5815 16.25 16.25V5H16.875C17.0408 5 17.1997 4.93415 17.3169 4.81694C17.4342 4.69973 17.5 4.54076 17.5 4.375C17.5 4.20924 17.4342 4.05027 17.3169 3.93306C17.1997 3.81585 17.0408 3.75 16.875 3.75ZM7.5 3.125C7.5 2.95924 7.56585 2.80027 7.68306 2.68306C7.80027 2.56585 7.95924 2.5 8.125 2.5H11.875C12.0408 2.5 12.1997 2.56585 12.3169 2.68306C12.4342 2.80027 12.5 2.95924 12.5 3.125V3.75H7.5V3.125ZM15 16.25H5V5H15V16.25ZM8.75 8.125V13.125C8.75 13.2908 8.68415 13.4497 8.56694 13.5669C8.44973 13.6842 8.29076 13.75 8.125 13.75C7.95924 13.75 7.80027 13.6842 7.68306 13.5669C7.56585 13.4497 7.5 13.2908 7.5 13.125V8.125C7.5 7.95924 7.56585 7.80027 7.68306 7.68306C7.80027 7.56585 7.95924 7.5 8.125 7.5C8.29076 7.5 8.44973 7.56585 8.56694 7.68306C8.68415 7.80027 8.75 7.95924 8.75 8.125ZM12.5 8.125V13.125C12.5 13.2908 12.4342 13.4497 12.3169 13.5669C12.1997 13.6842 12.0408 13.75 11.875 13.75C11.7092 13.75 11.5503 13.6842 11.4331 13.5669C11.3158 13.4497 11.25 13.2908 11.25 13.125V8.125C11.25 7.95924 11.3158 7.80027 11.4331 7.68306C11.5503 7.56585 11.7092 7.5 11.875 7.5C12.0408 7.5 12.1997 7.56585 12.3169 7.68306C12.4342 7.80027 12.5 7.95924 12.5 8.125Z" fill="#9F9FA1"/>
                      </svg>
                  </button>
                </div>
                
                <div className="nav-center">
                  <button className="nav-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3169 15.4419C12.561 15.1979 12.561 14.8021 12.3169 14.5581L7.75888 10L12.3169 5.44194C12.561 5.19786 12.561 4.80214 12.3169 4.55806C12.0729 4.31398 11.6771 4.31398 11.4331 4.55806L6.43306 9.55806C6.18898 9.80214 6.18898 10.1979 6.43306 10.4419L11.4331 15.4419C11.6771 15.686 12.0729 15.686 12.3169 15.4419Z" fill="#9F9FA1"/>
                      </svg>
                  </button>
                  <span className="email-counter">1 from 36</span>
                  <button className="nav-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.68306 15.4419C7.43898 15.1979 7.43898 14.8021 7.68306 14.5581L12.2411 10L7.68306 5.44194C7.43898 5.19786 7.43898 4.80214 7.68306 4.55806C7.92714 4.31398 8.32286 4.31398 8.56694 4.55806L13.5669 9.55806C13.811 9.80214 13.811 10.1979 13.5669 10.4419L8.56694 15.4419C8.32286 15.686 7.92714 15.686 7.68306 15.4419Z" fill="#9F9FA1"/>
                      </svg>
                  </button>
                </div>
                
                <div className="nav-right">
                  <button className="nav-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.6854 7.59833C18.6072 7.35812 18.4598 7.1464 18.2615 6.98986C18.0633 6.83331 17.8231 6.73895 17.5713 6.71864L12.9619 6.34677L11.1823 2.04286C11.086 1.80834 10.9222 1.60774 10.7117 1.46656C10.5011 1.32538 10.2533 1.25 9.99983 1.25C9.74633 1.25 9.49856 1.32538 9.28801 1.46656C9.07747 1.60774 8.91366 1.80834 8.81741 2.04286L7.03929 6.34599L2.42757 6.71864C2.17536 6.73997 1.93506 6.83526 1.73677 6.99255C1.53847 7.14985 1.39101 7.36217 1.31285 7.6029C1.23469 7.84364 1.22931 8.10209 1.29738 8.34587C1.36546 8.58965 1.50396 8.80792 1.69554 8.97333L5.21116 12.0069L4.14007 16.5429C4.08016 16.7893 4.09483 17.048 4.18221 17.286C4.26958 17.5241 4.42573 17.7309 4.63082 17.88C4.83591 18.0292 5.0807 18.1141 5.33411 18.1239C5.58752 18.1337 5.83814 18.0679 6.05413 17.935L9.99944 15.5069L13.9471 17.935C14.1632 18.0664 14.4133 18.1308 14.6659 18.1203C14.9185 18.1098 15.1624 18.0247 15.3668 17.8759C15.5712 17.727 15.727 17.521 15.8145 17.2838C15.9021 17.0466 15.9175 16.7888 15.8588 16.5429L14.7838 12.0061L18.2994 8.97255C18.4926 8.80741 18.6323 8.58867 18.701 8.34403C18.7697 8.09939 18.7643 7.83987 18.6854 7.59833ZM17.4869 8.02567L13.6823 11.3069C13.5955 11.3817 13.5309 11.4789 13.4957 11.5879C13.4604 11.6969 13.4558 11.8134 13.4823 11.9249L14.6448 16.8311C14.6478 16.8379 14.6481 16.8456 14.6456 16.8525C14.6431 16.8595 14.6381 16.8653 14.6315 16.8686C14.6174 16.8796 14.6135 16.8772 14.6018 16.8686L10.3268 14.2397C10.2283 14.1792 10.115 14.1472 9.99944 14.1472C9.88387 14.1472 9.77055 14.1792 9.6721 14.2397L5.3971 16.8702C5.38538 16.8772 5.38225 16.8796 5.36741 16.8702C5.36082 16.8668 5.35576 16.8611 5.35329 16.8541C5.35082 16.8471 5.35112 16.8395 5.35413 16.8327L6.51663 11.9265C6.54312 11.815 6.53848 11.6984 6.50321 11.5894C6.46794 11.4805 6.4034 11.3833 6.31663 11.3085L2.51194 8.02724C2.50257 8.01942 2.49397 8.01239 2.50179 7.98817C2.5096 7.96395 2.51585 7.96708 2.52757 7.96552L7.52132 7.56239C7.63586 7.55257 7.74547 7.51134 7.83809 7.44325C7.93072 7.37516 8.00277 7.28285 8.04632 7.17645L9.96976 2.51942C9.976 2.50614 9.97835 2.49989 9.9971 2.49989C10.0158 2.49989 10.0182 2.50614 10.0244 2.51942L11.9526 7.17645C11.9965 7.28289 12.069 7.3751 12.1621 7.44293C12.2551 7.51076 12.3651 7.55156 12.4799 7.56083L17.4737 7.96395C17.4854 7.96395 17.4924 7.96395 17.4994 7.98661C17.5065 8.00927 17.4994 8.01786 17.4869 8.02567Z" fill="#9F9FA1"/>
                      </svg>
                  </button>
                  <button className="nav-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10Z" fill="#9F9FA1"/>
                        <path d="M9.0625 15C9.0625 15.5178 9.48223 15.9375 10 15.9375C10.5178 15.9375 10.9375 15.5178 10.9375 15C10.9375 14.4822 10.5178 14.0625 10 14.0625C9.48223 14.0625 9.0625 14.4822 9.0625 15Z" fill="#9F9FA1"/>
                        <path d="M9.0625 5C9.0625 5.51777 9.48223 5.9375 10 5.9375C10.5178 5.9375 10.9375 5.51777 10.9375 5C10.9375 4.48223 10.5178 4.0625 10 4.0625C9.48223 4.0625 9.0625 4.48223 9.0625 5Z" fill="#9F9FA1"/>
                      </svg>
                  </button>
                </div>
              </div>

              {/* Email Content */}
              <div className="email-content">
                {/* Email Title */}
                <div className='d-flex align-items-center justify-content-between '>
                  <div className='d-flex'>
                    <h1 className="email-title">{selectedEmail.subject}</h1>
                  </div>
                    <div className='d-flex mx-3'>
                        <div className='nav-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                              <path d="M12.4169 2.5H11.5V0.5C11.5 0.367392 11.4473 0.240215 11.3536 0.146447C11.2598 0.0526785 11.1326 0 11 0H3C2.86739 0 2.74021 0.0526785 2.64645 0.146447C2.55268 0.240215 2.5 0.367392 2.5 0.5V2.5H1.58313C0.71 2.5 0 3.17313 0 4V9C0 9.13261 0.0526784 9.25979 0.146447 9.35355C0.240215 9.44732 0.367392 9.5 0.5 9.5H2.5V11.5C2.5 11.6326 2.55268 11.7598 2.64645 11.8536C2.74021 11.9473 2.86739 12 3 12H11C11.1326 12 11.2598 11.9473 11.3536 11.8536C11.4473 11.7598 11.5 11.6326 11.5 11.5V9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9V4C14 3.17313 13.29 2.5 12.4169 2.5ZM3.5 1H10.5V2.5H3.5V1ZM10.5 11H3.5V8H10.5V11ZM13 8.5H11.5V7.5C11.5 7.36739 11.4473 7.24021 11.3536 7.14645C11.2598 7.05268 11.1326 7 11 7H3C2.86739 7 2.74021 7.05268 2.64645 7.14645C2.55268 7.24021 2.5 7.36739 2.5 7.5V8.5H1V4C1 3.72438 1.26188 3.5 1.58313 3.5H12.4169C12.7381 3.5 13 3.72438 13 4V8.5ZM11.5 5.25C11.5 5.39834 11.456 5.54334 11.3736 5.66668C11.2912 5.79001 11.1741 5.88614 11.037 5.94291C10.9 5.99968 10.7492 6.01453 10.6037 5.98559C10.4582 5.95665 10.3246 5.88522 10.2197 5.78033C10.1148 5.67544 10.0434 5.5418 10.0144 5.39632C9.98547 5.25083 10.0003 5.10003 10.0571 4.96299C10.1139 4.82594 10.21 4.70881 10.3333 4.6264C10.4567 4.54399 10.6017 4.5 10.75 4.5C10.9489 4.5 11.1397 4.57902 11.2803 4.71967C11.421 4.86032 11.5 5.05109 11.5 5.25Z" fill="#434345"/>
                            </svg>
                        </div>
                        <div className='nav-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1C7.5 0.723858 7.72386 0.5 8 0.5H11C11.2761 0.5 11.5 0.723858 11.5 1V4C11.5 4.27614 11.2761 4.5 11 4.5C10.7239 4.5 10.5 4.27614 10.5 4V1.5H8C7.72386 1.5 7.5 1.27614 7.5 1Z" fill="#434345"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L7.35355 5.35355C7.15829 5.54882 6.84171 5.54882 6.64645 5.35355C6.45118 5.15829 6.45118 4.84171 6.64645 4.64645L10.6464 0.646447C10.8417 0.451184 11.1583 0.451184 11.3536 0.646447Z" fill="#434345"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.5C1.27614 7.5 1.5 7.72386 1.5 8V10.5H4C4.27614 10.5 4.5 10.7239 4.5 11C4.5 11.2761 4.27614 11.5 4 11.5H1C0.723858 11.5 0.5 11.2761 0.5 11V8C0.5 7.72386 0.723858 7.5 1 7.5Z" fill="#434345"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.35355 6.64645C5.54882 6.84171 5.54882 7.15829 5.35355 7.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645Z" fill="#434345"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Sender Info */}
                <div className="sender-info">
                  <div className="sender-avatar">
                    {selectedEmail.avatar}
                  </div>
                  <div className="sender-details">
                    <div className="sender-name-large">{selectedEmail.sender}</div>
                    <div className="sender-email">{selectedEmail.senderEmail}</div>
                  </div>
                  <div className="email-full-date">
                    {selectedEmail.fullDate}<br/>
                    02:30 PM
                  </div>
                </div>

                {/* Email Body */}
                <div className="email-body hide-scrollbar">
                  <p className="email-greeting">Dear Event Management Team,</p>
                  
                  <p className="email-main-content">
                    We are the official sound partner for the Rhythm & Beats Music Festival and are reaching out to confirm the delivery schedule for our sound system setup.
                  </p>

                  {selectedEmail.id === 1 && (
                    <div className="email-details">
                      <p>Here are a few key points we'd like to discuss:</p>
                      <ol className="email-list-content">
                        <li>
                          <strong>Delivery Timing:</strong> Please confirm the preferred date and time for our team to deliver equipment to Sunset Park.
                        </li>
                        <li>
                          <strong>Access Requirements:</strong> Let us know the details regarding venue access, loading dock availability, and any on-site contacts we should coordinate with.
                        </li>
                        <li>
                          <strong>Setup Specifications:</strong> We would appreciate it if you could share any specific requirements for the stage layout or unique aspects of the venue that might impact our installation.
                        </li>
                        <li>
                          <strong>Testing and Rehearsal:</strong> If there is a scheduled time for sound testing or rehearsals, please let us know so we can ensure our team is present for technical support.
                        </li>
                      </ol>
                      
                      <p>Please feel free to reach out with any questions or additional information you require from our side.</p>
                      <p>Looking forward to your confirmation and further instructions.</p>
                      <p>Warm regards,</p>
                      
                      <div className="signature">
                        <div className="signature-name">Harmony Audio Team</div>
                        <div className="signature-phone">+1-800-555-8976</div>
                        <div className="signature-email">support@harmonyaudio.com</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="bottom-actions">
                  <button className="action-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M11.6878 8.93774C11.6878 9.05378 11.6418 9.16506 11.5597 9.2471C11.4777 9.32915 11.3664 9.37524 11.2503 9.37524C11.1343 9.37524 11.023 9.32915 10.941 9.2471C10.8589 9.16506 10.8128 9.05378 10.8128 8.93774C10.8114 7.66183 10.3039 6.4386 9.4017 5.53639C8.49949 4.63419 7.27625 4.12669 6.00034 4.12524H1.80636L3.68488 6.00321C3.76697 6.0853 3.81309 6.19665 3.81309 6.31274C3.81309 6.42884 3.76697 6.54018 3.68488 6.62227C3.60278 6.70437 3.49144 6.75049 3.37534 6.75049C3.25925 6.75049 3.14791 6.70437 3.06581 6.62227L0.440813 3.99727C0.400136 3.95664 0.367866 3.90839 0.345849 3.85528C0.323832 3.80217 0.3125 3.74524 0.3125 3.68774C0.3125 3.63025 0.323832 3.57332 0.345849 3.52021C0.367866 3.4671 0.400136 3.41884 0.440813 3.37821L3.06581 0.753212C3.14791 0.671119 3.25925 0.625 3.37534 0.625C3.49144 0.625 3.60278 0.671119 3.68488 0.753212C3.76697 0.835305 3.81309 0.946647 3.81309 1.06274C3.81309 1.17884 3.76697 1.29018 3.68488 1.37227L1.80636 3.25024H6.00034C7.50827 3.25184 8.95399 3.85156 10.0203 4.91783C11.0865 5.9841 11.6863 7.42981 11.6878 8.93774Z" fill="#0C0D19"/>
                      </svg>
                    Reply
                  </button>
                  <button className="action-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M11.5595 3.99727L8.93453 6.62227C8.85244 6.70437 8.7411 6.75049 8.625 6.75049C8.5089 6.75049 8.39756 6.70437 8.31547 6.62227C8.23338 6.54018 8.18726 6.42884 8.18726 6.31274C8.18726 6.19665 8.23338 6.0853 8.31547 6.00321L10.194 4.12524H6C4.72409 4.12669 3.50085 4.63419 2.59865 5.53639C1.69644 6.4386 1.18895 7.66183 1.1875 8.93774C1.1875 9.05378 1.14141 9.16506 1.05936 9.2471C0.977312 9.32915 0.866032 9.37524 0.75 9.37524C0.633968 9.37524 0.522688 9.32915 0.440641 9.2471C0.358594 9.16506 0.3125 9.05378 0.3125 8.93774C0.314092 7.42981 0.913821 5.9841 1.98009 4.91783C3.04636 3.85156 4.49207 3.25184 6 3.25024H10.194L8.31547 1.37227C8.27482 1.33163 8.24258 1.28337 8.22058 1.23026C8.19858 1.17715 8.18726 1.12023 8.18726 1.06274C8.18726 1.00526 8.19858 0.948336 8.22058 0.895226C8.24258 0.842117 8.27482 0.79386 8.31547 0.753212C8.39756 0.671119 8.5089 0.625 8.625 0.625C8.68248 0.625 8.73941 0.636323 8.79252 0.658321C8.84563 0.68032 8.89388 0.712564 8.93453 0.753212L11.5595 3.37821C11.6002 3.41884 11.6325 3.4671 11.6545 3.52021C11.6765 3.57332 11.6878 3.63025 11.6878 3.68774C11.6878 3.74524 11.6765 3.80217 11.6545 3.85528C11.6325 3.90839 11.6002 3.95664 11.5595 3.99727Z" fill="#0C0D19"/>
                      </svg>
                    Forward
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
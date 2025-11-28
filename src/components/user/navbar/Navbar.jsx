import './Navbar.css';
import JiffyLogo from "../../../assets/Jiffy-logo.png";
import { Link , useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const offcanvasRef = useRef(null);
  const location = useLocation();
  const isMapPage = location.pathname === '/user/Map';
  const isAdminPage = location.pathname.startsWith('/user/ForBusiness') || location.pathname === '/user/pricing' || location.pathname.startsWith('/user/services/businesses');
  const isBusinessContext = location.pathname.startsWith('/user/ForBusiness') || location.pathname.startsWith('/user/services/businesses');
  const servicesLinkTo = isBusinessContext ? '/user/services/businesses' : '/user/services/customers';

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  // Close offcanvas when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target) && showOffcanvas) {
        closeOffcanvas();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOffcanvas]);

  // Close offcanvas on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showOffcanvas) {
        closeOffcanvas();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showOffcanvas]);

  return (
     <nav className={`navbar navbar-expand-lg custom-navbar ${isMapPage ? 'map-navbar' : ''}`}>
      <div className="container">

        {/* Logo on the left */}
        <Link className="navbar-brand" to="/user">
          <img src={JiffyLogo} alt="Logo" style={{ width: '70px' }} />
        </Link>

        {/* Toggler on mobile */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="navbarOffcanvas"
          aria-expanded={showOffcanvas}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop navigation - visible on large screens */}
        <div className="d-none d-lg-flex w-100 justify-content-between align-items-center">
          {/* Center Links */}
          <ul className="navbar-nav mx-auto text-center middle-nav">
            <li className="nav-item mx-lg-4 my-2 my-lg-0">
              <Link className="nav-link" to={servicesLinkTo}>Services</Link>
            </li>
            <li className="nav-item mx-lg-4 my-2 my-lg-0">
              <Link className="nav-link" to={isAdminPage ? "/user/pricing" : "*"}>
                {isAdminPage ? "Pricing" : "About"}
              </Link>
            </li>
            {/* Only show Contact if not on admin page */}
            {!isAdminPage && (
              <li className="nav-item mx-lg-4 my-2 my-lg-0">
                <Link className="nav-link" to="/user/contact">Contact</Link>
              </li>
            )}
          </ul>

          {/* Right Links */}
          <ul className="navbar-nav text-center right-nav">
            <li className="nav-item mx-lg-2 my-2 my-lg-0 gradient-border-nav">
              <Link className="nav-link fw-bold" to={isAdminPage ? "/user" : "/user/ForBusiness"}>
                {isAdminPage ? "For Customers" : "For Businesses"}
              </Link>
            </li>
            <li className="nav-item mx-lg-2 my-2 my-lg-0">
             <Link to="/auth">
              <button className="loginbtn btn btn-primary">
                <i className="bi bi-person"></i> Log In
              </button>
            </Link>
            </li>
          </ul>
        </div>

        {/* Backdrop overlay */}
        {showOffcanvas && (
          <div 
            className="offcanvas-backdrop fade show" 
            onClick={closeOffcanvas}
            aria-hidden="true"
          ></div>
        )}

        {/* Offcanvas sliding panel for mobile */}
        <div 
          ref={offcanvasRef}
          className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
          tabIndex="-1"
          id="navbarOffcanvas"
          aria-labelledby="navbarOffcanvasLabel"
          role="dialog"
          aria-modal="true"
        >
          <div className="offcanvas-header">
            <button 
              type="button" 
              className="btn-close my-1" 
              onClick={closeOffcanvas}
              aria-label="Close navigation"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to={servicesLinkTo} onClick={closeOffcanvas}>Services</Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to={isAdminPage ? "/user/pricing" : "*"}
                  onClick={closeOffcanvas}
                >
                  {isAdminPage ? "Pricing" : "About"}
                </Link>
              </li>
              {/* Only show Contact if not on admin page */}
              {!isAdminPage && (
                <li className="nav-item">
                  <Link className="nav-link" to="/user/contact" onClick={closeOffcanvas}>Contact</Link>
                </li>
              )}
              <li className="nav-item gradient-border-nav-mobile">
                <Link 
                  className="nav-link fw-bold" 
                  to={isAdminPage ? "/user" : "/user/ForBusiness"}
                  onClick={closeOffcanvas}
                >
                  {isAdminPage ? "For Customers" : "For Businesses"}
                </Link>
              </li>
              <li className="nav-item mt-3">
               <Link to="/auth" onClick={closeOffcanvas}>
                <button className="loginbtn btn btn-primary w-100">
                  <i className="bi bi-person"></i> Log In
                </button>
              </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}
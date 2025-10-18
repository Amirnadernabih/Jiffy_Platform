import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Footer.css';
import JiffyLogo from '../../../assets/Jiffy-logo.png';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="cta-box my-3 mb-5">
        <Row className="justify-content-between align-items-center">
          <Col md={8} sm={12}>
            <h4 className="cta-text">
              Elevate your business Jiffy with our All-<br/> in-one booking system!
            </h4>
          </Col>
          <Col md="auto" sm={12} className="text-md-end text-sm-start mt-3 mt-md-0 free-trial-btn">
            <Button className="cta-button">Start 14-day Free Trial</Button>
          </Col>
        </Row>
      </div>
      <hr className='break-line'/>
      <Container className="footer-links">
        <Row className="gy-4">
          <Col xs={12} md={3}>
            <div className="first-col">
              <Image src={JiffyLogo} alt="Jiffy Logo" className="footer-inline-logo" />
              <div className="ms-3">
                <h6>Company</h6>
                <ul>
                  <li>About</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </div>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <h6>Help</h6>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h6>Resources</h6>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h6>Links</h6>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </Col>
        </Row>

        <hr />

        <Row className="bottom-bar text-center text-md-start">
          <Col md={6}>
            <p className="copyright">
              © Jiffy Bookings Copyright 2025, All Rights Reserved
            </p>
          </Col>
          <Col md={6} className="text-md-end copyright-rightside">
            <span className="policy-link">Privacy Policy</span>
            <span className="policy-link">Terms & Conditions</span>
          </Col>
        </Row>
      </Container>
      <div class="footer-bg-circle">
  <svg xmlns="http://www.w3.org/2000/svg" width="524" height="480" viewBox="0 0 524 480" fill="none">
    <g opacity="0.2" filter="url(#filter0_f_52_3272)">
      <path d="M583 401.5C583 521.07 493.905 618 384 618C274.095 618 185 521.07 185 401.5C185 281.93 274.095 185 384 185C493.905 185 583 281.93 583 401.5Z" fill="#00D1FF"/>
    </g>
    <defs>
      <filter id="filter0_f_52_3272" x="0" y="0" width="768" height="803" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="92.5" result="effect1_foregroundBlur_52_3272"/>
      </filter>
    </defs>
  </svg>
</div>

    </footer>
  );
};

export default Footer;

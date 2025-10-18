import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import JiffyLogo from "../../../src/assets/Jiffy-logo.png";
import "./Auth.css";

export default function AuthSelection() {
  const [role, setRole] = useState("customer");

  return (
    <Container fluid className="auth-container p-0">
      <Row className="g-0 flex-column flex-md-row min-vh-100">
        {/* === Brand / Steps panel === */}
        <Col  md={6} className=" d-md-block left-container">
          <div className="auth-left-panel h-100 px-4 px-lg-5 py-4 d-flex flex-column justify-content-between">
            <div>
                <div className="d-flex align-items-center mb-5">
                <img src={JiffyLogo} alt="Jiffy Bookings" className="brand-logo-auth mb-0 me-2" />
                <h6 className="mb-0 Jiffy-text-auth">Jiffy Bookings</h6>
                </div>
<div className="Get-started">
              <h2 className="display-6 fw-semibold text-white mb-3">
                Get Started with <br /> Jiffy Bookings
              </h2>
              <p className="left-desc mb-5">
                Complete these easy steps to register your account.
              </p>

            {/* Progress list */}
            <ul className="step-list list-unstyled mb-0">
              <li className="active">
                <span className="index">1</span>
                <span>Sign up your account</span>
              </li>
              <li>
                <span className="index">2</span>
                <span>Set up your workspace</span>
              </li>
              <li>
                <span className="index">3</span>
                <span>Set up your profile</span>
              </li>
            </ul>
            </div>
          </div>
         </div>
        </Col>

        {/* === Role selection === */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center py-5 py-md-0 right-side">
          <div className="auth-right-panel w-100" style={{ maxWidth: 420 }}>
            <h3 className="fw-bold mb-4 text-center">Sign In</h3>

            {/* Professional card */}
            <Card
              className={`role-card mb-3 ${role === "professional" ? "selected" : ""}`}
              onClick={() => setRole("professional")}
              role="button"
            >
              <Card.Body className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 38 41" fill="none">
            <g clip-path="url(#clip0_109_3343)">
                <path d="M22.0117 40.6352C22.0117 36.4286 25.4234 33.0173 29.6316 33.0173C33.8398 33.0173 37.2511 36.429 37.2511 40.6352" fill="#0F33B4"/>
                <path d="M7.61969 31.324C9.95749 31.324 11.8527 29.4289 11.8527 27.091C11.8527 24.7532 9.95749 22.8581 7.61969 22.8581C5.28188 22.8581 3.38672 24.7532 3.38672 27.091C3.38672 29.4289 5.28188 31.324 7.61969 31.324Z" fill="#0F33B4"/>
                <path d="M0 40.6352C0 36.4286 3.41214 33.0173 7.61951 33.0173C11.8285 33.0173 15.239 36.429 15.239 40.6352" fill="#0F33B4"/>
                <path d="M27.9378 21.0539L21.7556 16.9318H20.3187C18.1667 16.9318 16.9326 15.6986 16.9326 13.5453V3.3861C16.9322 1.23487 18.1667 -3.05176e-05 20.3183 -3.05176e-05H33.8645C36.0157 -3.05176e-05 37.251 1.23487 37.251 3.3861V13.5453C37.251 15.6986 36.0157 16.9318 33.8645 16.9318H27.9378V21.0539ZM20.3183 1.69283C19.0997 1.69283 18.6251 2.16745 18.6251 3.3861V13.5453C18.6251 14.764 19.0997 15.2386 20.3183 15.2386H22.268L26.2446 17.8908V15.2386H33.8645C35.0831 15.2386 35.5578 14.764 35.5578 13.5453V3.3861C35.5578 2.16745 35.0831 1.69283 33.8645 1.69283H20.3183Z" fill="black"/>
                <path d="M20.3186 18.6251C19.1841 18.6251 18.2003 18.3504 17.4055 17.8559L13.5455 20.4305V17.7783H6.77285C5.5542 17.7783 5.07958 17.3041 5.07958 16.0854V5.07937C5.07958 3.86072 5.5542 3.3861 6.77285 3.3861H15.2388C15.2388 2.77088 15.3383 2.21378 15.4899 1.69283H6.77285C4.62081 1.69283 3.38672 2.92814 3.38672 5.07937V16.0854C3.38672 18.2383 4.62122 19.4715 6.77285 19.4715H11.8522V23.594L18.0349 19.4715H18.6253C19.6737 19.4715 20.4998 19.1741 21.076 18.6251H20.3186Z" fill="black"/>
                <path d="M32.1711 5.9258H29.6314C29.6314 4.28861 29.6314 3.3861 27.9377 3.3861H26.2444C24.5512 3.3861 24.5512 4.28901 24.5512 5.9258H22.0115C22.0115 5.9258 21.165 5.9258 21.165 6.77223C21.165 7.61866 21.165 12.6985 21.165 12.6985C21.165 12.6985 21.165 13.5449 22.0115 13.5449C22.8579 13.5449 32.1711 13.5449 32.1711 13.5449C32.1711 13.5449 33.0179 13.5449 33.0179 12.6985C33.0179 11.8516 33.0179 6.77223 33.0179 6.77223C33.0179 6.77223 33.0179 5.9258 32.1711 5.9258ZM26.2444 5.9258C26.2444 5.60844 26.2444 5.30042 26.2522 5.07937H27.9304C27.9381 5.30083 27.9381 5.60844 27.9381 5.9258H26.2444Z" fill="#2B9FF1"/>
                <path d="M11.0053 13.5819C10.538 13.5819 10.1588 13.2032 10.1588 12.7354V11.0056C10.1588 10.5375 10.538 10.1592 11.0053 10.1592C12.5336 10.1592 12.6985 8.97506 12.6985 8.4659C12.6985 7.53333 11.9391 6.77263 11.0053 6.77263C10.0715 6.77263 9.312 7.53333 9.312 8.4659C9.312 8.93402 8.93288 9.31234 8.46557 9.31234C7.99786 9.31234 7.61914 8.93361 7.61914 8.4659C7.61914 6.59912 9.13849 5.07977 11.0053 5.07977C12.8725 5.07977 14.3918 6.59912 14.3918 8.4659C14.3918 10.1937 13.4011 11.4392 11.8521 11.7667V12.7358C11.8521 13.2032 11.473 13.5819 11.0053 13.5819Z" fill="black"/>
                <path d="M11.0056 16.085C11.4731 16.085 11.852 15.706 11.852 15.2386C11.852 14.7711 11.4731 14.3921 11.0056 14.3921C10.5381 14.3921 10.1592 14.7711 10.1592 15.2386C10.1592 15.706 10.5381 16.085 11.0056 16.085Z" fill="black"/>
                <path d="M29.6314 31.324C31.9692 31.324 33.8644 29.4289 33.8644 27.091C33.8644 24.7532 31.9692 22.8581 29.6314 22.8581C27.2936 22.8581 25.3984 24.7532 25.3984 27.091C25.3984 29.4289 27.2936 31.324 29.6314 31.324Z" fill="#0F33B4"/>
            </g>
            <defs>
                <clipPath id="clip0_109_3343">
                <rect width="37.2511" height="40.6352" fill="white"/>
                </clipPath>
            </defs>
            </svg>                
            <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold auth-card mx-2">
                    Jiffy for Professionals, Manage your appointments with ease
                  </p>
                    <div className="text-start mx-2">
                    Check <small className="criteria-link">Criteria</small>
                    </div>

                </div>
                <Form.Check
                  type="radio"
                  checked={role === "professional"}
                  readOnly
                />
              </Card.Body>
            </Card>

            {/* Customer card */}
            <Card
              className={`role-card mb-4 ${role === "customer" ? "selected" : ""}`}
              onClick={() => setRole("customer")}
              role="button"
            >
              <Card.Body className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 45 45" fill="none">
                <path d="M27.1877 30.0006C25.7815 29.25 26.5321 27.8437 27.1877 27.1881C28.0315 26.3443 29.0633 23.4387 29.0633 23.4387C30.7508 22.6881 30.9389 21.4699 31.1252 20.6262C31.8758 18.1881 30.0002 17.8137 30.0002 17.8137C30.0002 17.8137 31.4996 13.783 30.2815 10.6893C28.6871 6.65863 22.2184 5.15743 21.0934 8.90863C13.4065 7.21937 14.999 17.8119 14.999 17.8119C14.999 17.8119 13.1234 18.1863 13.874 20.6244C14.0621 21.4681 14.2484 22.6863 15.9359 23.4369C15.9359 23.4369 16.9678 26.3425 17.8115 27.1863C18.4672 27.8419 19.2178 29.2482 17.8115 29.9988C14.999 31.4982 6.56152 31.8744 6.56152 38.4363H38.4359C38.4377 31.8744 30.0002 31.5 27.1877 30.0006Z" fill="url(#paint0_linear_109_3314)"/>
                <defs>
                    <linearGradient id="paint0_linear_109_3314" x1="22.4987" y1="6.75403" x2="22.4987" y2="38.4363" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#020FF0"/>
                    <stop offset="0.5" stop-color="#00D1FF"/>
                    <stop offset="1" stop-color="#2B9FF1"/>
                    </linearGradient>
                </defs>
                </svg>
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold auth-card mx-2">
                    Jiffy for Customers, Book services anytime anywhere
                  </p>
                <div className="text-start mx-2">
                Check <small className="criteria-link">Criteria</small>
                </div>
                </div>
                <Form.Check type="radio" checked={role === "customer"} readOnly />
              </Card.Body>
            </Card>

            <Button
              variant="primary"
              className="gradient-btn w-100 d-flex"
              href={role === "professional" ? "/auth/professional/sign-in" : "/auth/customer/sign-in"}
            >
              Proceed
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
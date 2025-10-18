import { Container, Row, Col, Form, Button, InputGroup, Alert } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import JiffyLogo from "../../../src/assets/Jiffy-logo.png";
import "./Auth.css";

export default function ProfessionalSignIn() {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const userData = await login(email, password, 'admin');
      
      // If we reach here, authentication and role validation succeeded
      navigate('/admin');
    } catch (err) {
      setError(err.message);
      setEmail('');
      setPassword('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="auth-container p-0">
      <Row className="g-0 flex-column flex-md-row min-vh-100">
        {/* === Brand / Steps panel === */}
        <Col xs={12} md={6} className=" d-md-block left-container">
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

        {/* === Sign‑in form === */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center py-5 py-md-0 right-side">
          <div className="auth-right-panel w-100" style={{ maxWidth: 420 }}>
            <h3 className="fw-bold mb-1 text-center">Professional Sign In</h3>
            <p className="text-muted small text-center mb-4">Welcome back! Please enter your professional details.</p>
            
            {/* Google SSO */}
            <Button className="w-100 google-btn mb-4 d-flex align-items-center justify-content-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M18.1726 8.86788H17.5013V8.83329H10.0013V12.1666H14.7109C14.0238 14.107 12.1776 15.5 10.0013 15.5C7.24005 15.5 5.0013 13.2612 5.0013 10.5C5.0013 7.73871 7.24005 5.49996 10.0013 5.49996C11.2759 5.49996 12.4355 5.98079 13.3184 6.76621L15.6755 4.40913C14.1871 3.02204 12.1963 2.16663 10.0013 2.16663C5.39922 2.16663 1.66797 5.89788 1.66797 10.5C1.66797 15.102 5.39922 18.8333 10.0013 18.8333C14.6034 18.8333 18.3346 15.102 18.3346 10.5C18.3346 9.94121 18.2771 9.39579 18.1726 8.86788Z" fill="#FFC107"/>
            <path d="M2.62793 6.62121L5.36585 8.62913C6.10668 6.79496 7.90085 5.49996 10.0004 5.49996C11.275 5.49996 12.4346 5.98079 13.3175 6.76621L15.6746 4.40913C14.1863 3.02204 12.1954 2.16663 10.0004 2.16663C6.7996 2.16663 4.02376 3.97371 2.62793 6.62121Z" fill="#FF3D00"/>
            <path d="M10.0008 18.8333C12.1533 18.8333 14.1091 18.0095 15.5879 16.6699L13.0087 14.4874C12.1439 15.1451 11.0872 15.5008 10.0008 15.4999C7.83328 15.4999 5.99286 14.1178 5.29953 12.1891L2.58203 14.2828C3.9612 16.9816 6.76203 18.8333 10.0008 18.8333Z" fill="#4CAF50"/>
            <path d="M18.1712 8.86771H17.5V8.83313H10V12.1665H14.7096C14.3809 13.09 13.7889 13.897 13.0067 14.4877L13.0079 14.4869L15.5871 16.6694C15.4046 16.8352 18.3333 14.6665 18.3333 10.4998C18.3333 9.94105 18.2758 9.39563 18.1712 8.86771Z" fill="#1976D2"/>
            </svg>
               Google
            </Button>

            <div className="d-flex align-items-center justify-content-between mb-4 or-separator">
              <hr className="flex-grow-1" />
              <span className="mx-2">Or</span>
              <hr className="flex-grow-1" />
            </div>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <div className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  placeholder="eg. professional@gmail.com" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <Form.Label>Password</Form.Label>
                <InputGroup className="rounded-input-group">
                  <Form.Control
                    placeholder="Enter your password"
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPwd(!showPwd)}
                    type="button"
                  >
                    <Eye />
                  </Button>
                </InputGroup>
              </div>
              
              <div className="d-flex justify-content-end mb-3">
                <a href="/forgot-password" className="small">
                  Forgot password?
                </a>
              </div>

              <Button 
                variant="primary" 
                className="gradient-btn w-100" 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Form>

            <p className="small text-center mt-4">
              Don't have an account? <a href="/auth/professional/sign-up">Sign up</a>
            </p>

            {/* Demo credentials for testing */}
            <div className="mt-4 p-3 bg-light rounded">
              <small className="text-muted d-block mb-2">Professional Demo Credentials:</small>
              <small className="text-muted d-block">Admin Only: AdminMai@gmail.com / AdminMai123@</small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
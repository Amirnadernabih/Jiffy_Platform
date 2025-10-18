import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Step1PersonalInfo({ data, onUpdate, onNext }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    address: ''
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onNext();
    }
  };

  const isFormValid = () => {
    return formData.fullName && formData.email && formData.phoneNumber && formData.address;
  };

  return (
    <div className="personal-info-form">
      <div className="form-header mb-4">
        <h2 className="form-title">Personal information</h2>
      </div>
      
      <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col lg={6} md={12} className="mb-3 mb-lg-0">
              <Form.Group>
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName || ''}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="form-input-responsive"
                />
              </Form.Group>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group>
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="form-input-responsive"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} md={12} className="mb-3 mb-lg-0">
              <Form.Group>
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber || ''}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="form-input-responsive"
                />
              </Form.Group>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={formData.companyName || ''}
                  onChange={handleChange}
                  placeholder="Enter your company name (optional)"
                  className="form-input-responsive"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Address *</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address || ''}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  required
                  className="form-input-responsive"
                />
              </Form.Group>
            </Col>
          </Row>

        <div className="d-flex justify-content-end mt-4">
            <Button 
              type="submit" 
              className="btn-continue btn-responsive"
              disabled={!isFormValid()}
              size="lg"
            >
              Continue
            </Button>
          </div>
      </Form>
    </div>
  );
}
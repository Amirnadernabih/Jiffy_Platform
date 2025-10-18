import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function SubStep1BusinessDetails({ data, onUpdate, onNext, onPrev }) {
  const [formData, setFormData] = useState({
    businessName: '',
    businessEmail: '',
    registrationNumber: '',
    company: '',
    address: ''
  });

  useEffect(() => {
    if (data) {
      setFormData({
        businessName: data.businessName || '',
        businessEmail: data.businessEmail || '',
        registrationNumber: data.registrationNumber || '',
        company: data.company || '',
        address: data.address || ''
      });
    }
  }, [data]);

  const handleChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
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
    return formData.businessName && formData.registrationNumber && formData.address;
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Business Info</h2>
        <span className="step-counter">Step 1/3</span>
      </div>
      
      <Form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Business name<span className="required">*</span></label>
            <input
              type="text"
              placeholder="Exp. John Carter"
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Business Email (if avail)</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.businessEmail}
              onChange={(e) => handleChange('businessEmail', e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Registration number<span className="required">*</span></label>
            <input
              type="text"
              placeholder="(123) 000-0000"
              value={formData.registrationNumber}
              onChange={(e) => handleChange('registrationNumber', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              placeholder="Exp. Company"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>
        </div>

        <div className="form-row single">
          <div className="form-group">
            <label>Address<span className="required">*</span></label>
            <input
              type="text"
              placeholder="Exp. San Francisco, CA"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-navigation">
          <Button 
            type="button" 
            className="btn-back"
            onClick={onPrev}
          >
            Back
          </Button>
          <Button 
            type="submit" 
            className="btn-continue"
            disabled={!isFormValid()}
          >
            Continue
          </Button>
        </div>
      </Form>
    </>
  );
}
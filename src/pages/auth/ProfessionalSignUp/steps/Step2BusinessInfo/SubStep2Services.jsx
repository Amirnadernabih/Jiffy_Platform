import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { SERVICE_CATEGORIES } from "@/assets/consts/serviceBadgeIcons.jsx";

export default function SubStep2Services({ data, onUpdate, onNext, onPrev }) {
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    if (data && data.selectedServices) {
      setSelectedServices(data.selectedServices);
    }
  }, [data]);

  const handleServiceToggle = (serviceId) => {
    const updatedServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    
    setSelectedServices(updatedServices);
    onUpdate({ selectedServices: updatedServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedServices.length > 0) {
      onNext();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Our services</h2>
        <span className="step-counter">Step 2/3</span>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="services-grid services-grid-responsive">
          {SERVICE_CATEGORIES.map((service) => (
            <div
              key={service.id}
              className={`service-badge service-badge-responsive ${
                selectedServices.includes(service.id) ? 'selected' : ''
              }`}
              onClick={() => handleServiceToggle(service.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceToggle(service.id);
                }
              }}
            >
              <div className="service-badge-icon">
                {service.icon}
              </div>
              <div className="service-badge-name">
                {service.name}
              </div>
            </div>
          ))}
        </div>

        <div className="form-navigation d-flex justify-content-between mt-4 gap-3">
          <Button 
            type="button" 
            variant="outline-secondary"
            className="btn-back btn-responsive"
            onClick={onPrev}
            size="lg"
          >
            Back
          </Button>
          <Button 
            type="submit" 
            className="btn-continue btn-responsive"
            disabled={selectedServices.length === 0}
            size="lg"
          >
            Continue
          </Button>
        </div>
      </form>
    </>
  );
}
import React from "react";
import JiffyLogo from "../../../../assets/Jiffy-logo.png";

export default function StepIndicator({ currentStep, onStepClick }) {
  const steps = [
    {
      number: 1,
      title: "Personal information",
      description: "Tell us who you are to get started."
    },
    {
      number: 2,
      title: "Business Information",
      description: "Specify more about your business"
    },
    {
      number: 3,
      title: "Services Builder",
      description: "Build your services page"
    },
    {
      number: 4,
      title: "Scheduling Type",
      description: "Final step! Let's activate your account."
    }
  ];

  const getStepStatus = (stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'active';
    return 'pending';
  };

  return (
    <div className="professional-signup-left-panel d-flex flex-column h-100 p-4">
      {/* Logo Section */}
      <div className="mb-5">
        <div className="brand-logo-auth mb-2 d-flex align-items-center">
          <img
            src={JiffyLogo}
            alt="Jiffy Bookings"
            className="img-fluid me-2"
          />
          <span className="Jiffy-text-auth text-nowrap">Jiffy Bookings</span>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex-grow-1">
        <div className="step-list position-relative">
          {steps.map((step, index) => {
            const status = getStepStatus(step.number);
            return (
              <div 
                key={step.number} 
                className={`step-item position-relative ${status} ${index + 1 === currentStep ? 'current' : ''}`}
                onClick={() => onStepClick && onStepClick(step.number)}
                style={{ cursor: onStepClick ? 'pointer' : 'default' }}
                role="button"
                tabIndex={onStepClick ? 0 : -1}
                onKeyDown={(e) => {
                  if (onStepClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onStepClick(step.number);
                  }
                }}
              >
                <div className="step-content d-flex align-items-start">
                  <div className="step-index-container me-3 position-relative">
                    <div className="step-circle d-flex align-items-center justify-content-center">
                      {status === 'completed' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.89532 0.707031C6.47129 0.707031 5.07924 1.1293 3.89521 1.92045C2.71118 2.7116 1.78833 3.83608 1.24338 5.15171C0.698432 6.46734 0.555848 7.91502 0.833662 9.31168C1.11148 10.7083 1.79721 11.9913 2.80415 12.9982C3.81108 14.0051 5.094 14.6909 6.49066 14.9687C7.88733 15.2465 9.33501 15.1039 10.6506 14.559C11.9663 14.014 13.0908 13.0912 13.8819 11.9071C14.673 10.7231 15.0953 9.33106 15.0953 7.90703C15.0953 5.99747 14.3367 4.16612 12.9865 2.81586C11.6362 1.4656 9.80487 0.707031 7.89532 0.707031ZM11.2793 5.87503L7.72732 10.803C7.62151 10.9459 7.46711 11.0451 7.29321 11.0819C7.11932 11.1187 6.93795 11.0907 6.78332 11.003L4.74332 9.81103C4.57782 9.71131 4.45872 9.54993 4.41221 9.36239C4.3657 9.17486 4.39559 8.97653 4.49532 8.81103C4.59504 8.64554 4.75642 8.52643 4.94395 8.47992C5.13149 8.43342 5.32982 8.46331 5.49532 8.56303L6.94332 9.42703L10.1433 5.03503C10.2621 4.91605 10.4187 4.84238 10.5861 4.82679C10.7535 4.8112 10.9211 4.85467 11.0598 4.94966C11.1985 5.04466 11.2995 5.18519 11.3455 5.3469C11.3914 5.50861 11.3793 5.6813 11.3113 5.83503L11.2793 5.87503Z" fill="#1BB42D"/>
                      </svg>
                      ) : (
                        <span className="step-number">{step.number}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`step-connector ${status === 'completed' ? 'completed' : (status === 'pending' || step.number + 1 > currentStep) ? 'pending' : ''}`}></div>
                    )}
                  </div>
                  <div className="step-details">
                    <div className="step-title">{step.title}</div>
                    <p className="step-description mb-0">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Help Section */}
      <div className="help-section mt-auto">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="help-title">Need a help?</div>
            <div className="help-subtitle">chat with live support</div>
          </div>
          <div className="help-icon me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M15.8265 11.9156V8.12616C15.8265 4.07993 12.5464 0.799805 8.50018 0.799805C4.45395 0.799805 1.17383 4.07993 1.17383 8.12616V11.9156M1.17383 11.3599C1.17383 9.85296 2.39539 8.63143 3.90226 8.63143C4.90684 8.63143 5.72122 9.44581 5.72122 10.4504V13.3809C5.72122 14.3855 4.90684 15.1999 3.90226 15.1999C2.39539 15.1999 1.17383 13.9784 1.17383 12.4714V11.3599ZM11.2791 10.4504C11.2791 9.44581 12.0935 8.63143 13.0981 8.63143C14.605 8.63143 15.8265 9.85296 15.8265 11.3599V12.4714C15.8265 13.9784 14.605 15.1999 13.0981 15.1999C12.0935 15.1999 11.2791 14.3855 11.2791 13.3809V10.4504Z" stroke="#170F49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
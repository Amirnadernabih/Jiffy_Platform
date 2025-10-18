import React from "react";

export default function SubStepIndicator({ currentSubStep, onSubStepClick, subSteps }) {
  // Default sub-steps for Step 2 (Business Info) if none provided
  const defaultSubSteps = [
    { number: 1, title: "Business Info", shortTitle: "Business", id: "business-info" },
    { number: 2, title: "Our services", shortTitle: "Services", id: "our-services" },
    { number: 3, title: "Payment", shortTitle: "Payment", id: "payment" }
  ];
  
  const activeSubSteps = subSteps || defaultSubSteps;

  const getSubStepStatus = (subStepNumber) => {
    if (subStepNumber < currentSubStep) return 'completed';
    if (subStepNumber === currentSubStep) return 'current';
    return 'pending';
  };

  const renderMobileSubStepIndicator = () => (
    <div className="mobile-substep-indicator d-md-none">
      <div className="mobile-substeps">
        {activeSubSteps.map((subStep, index) => {
          const status = getSubStepStatus(subStep.number);
          return (
            <React.Fragment key={subStep.number}>
              <div 
                className={`mobile-substep ${status}`}
                onClick={() => onSubStepClick && onSubStepClick(subStep.number)}
                style={{ cursor: onSubStepClick ? 'pointer' : 'default' }}
                role="button"
                tabIndex={onSubStepClick ? 0 : -1}
                onKeyDown={(e) => {
                  if (onSubStepClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onSubStepClick(subStep.number);
                  }
                }}
              >
                <div className="mobile-substep-circle">
                  {status === 'completed' ? (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    subStep.number
                  )}
                </div>
                <div className="mobile-substep-title">{subStep.shortTitle}</div>
              </div>
              {index < activeSubSteps.length - 1 && (
                <div className={`mobile-substep-connector ${status === 'completed' ? 'completed' : ''}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  const renderDesktopSubStepIndicator = () => (
    <div className="substep-breadcrumb substep-breadcrumb-responsive d-none d-md-flex">
      {activeSubSteps.map((subStep, index) => (
        <div key={subStep.number} className="d-flex align-items-center substep-item-wrapper">
          <div 
            className={`breadcrumb-item breadcrumb-item-responsive text-nowrap ${getSubStepStatus(subStep.number)}`}
            onClick={() => onSubStepClick && onSubStepClick(subStep.number)}
            style={{ cursor: onSubStepClick ? 'pointer' : 'default' }}
            role="button"
            tabIndex={onSubStepClick ? 0 : -1}
            onKeyDown={(e) => {
              if (onSubStepClick && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onSubStepClick(subStep.number);
              }
            }}
          >
            <span className="breadcrumb-number breadcrumb-number-responsive me-2">{subStep.number}</span>
            <span className="breadcrumb-title">{subStep.title}</span>
          </div>
          {index < activeSubSteps.length - 1 && (
            <span className="breadcrumb-arrow breadcrumb-arrow-responsive d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M7.03786 16L12.9609 10.5L7.03786 5" stroke="#170F49" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {renderMobileSubStepIndicator()}
      {renderDesktopSubStepIndicator()}
    </>
  );
}
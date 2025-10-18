/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StepIndicator from "./components/StepIndicator";
import Step1PersonalInfo from "./steps/Step1PersonalInfo";
import Step2BusinessInfo from "./steps/Step2BusinessInfo";
import Step3ServicesBuilder from "./steps/Step3ServicesBuilder/index";
import Step4SchedulingType from "./steps/Step4SchedulingType";
import { useFormData } from "./hooks/useFormData";
import { useStepNavigation } from "./hooks/useStepNavigation";
import "../Auth.css";
import "./ProfessionalSignUp.css";

export default function ProfessionalSignUp() {
  const { formData, updateFormData, resetFormData } = useFormData();
  const { currentStep, nextStep, prevStep, goToStep } = useStepNavigation();

  const steps = [
    { number: 1, title: "Personal", fullTitle: "Personal information" },
    { number: 2, title: "Business", fullTitle: "Business Information" },
    { number: 3, title: "Services", fullTitle: "Services Builder" },
    { number: 4, title: "Schedule", fullTitle: "Scheduling Type" }
  ];

  const getStepStatus = (stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'current';
    return 'pending';
  };

  const renderMobileStepIndicator = () => (
    <div className="mobile-step-indicator d-md-none">
      <div className="mobile-steps">
        {steps.map((step, index) => {
          const status = getStepStatus(step.number);
          return (
            <React.Fragment key={step.number}>
              <div className={`mobile-step ${status}`}>
                <div className="mobile-step-circle">
                  {status === 'completed' ? (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <div className="mobile-step-title">{step.title}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`mobile-step-connector ${status === 'completed' ? 'completed' : ''}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1PersonalInfo
            data={formData.personalInfo}
            onUpdate={(data) => updateFormData('personalInfo', data)}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <Step2BusinessInfo
            data={formData.businessInfo}
            onUpdate={(data) => updateFormData('businessInfo', data)}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <Step3ServicesBuilder
            data={formData.servicesBuilder}
            onUpdate={(data) => updateFormData('servicesBuilder', data)}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <Step4SchedulingType
            data={formData.schedulingType}
            onUpdate={(data) => updateFormData('schedulingType', data)}
            onPrev={prevStep}
            onSubmit={() => console.log('Form submitted:', formData)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container fluid className="professional-auth-container p-0">
      {/* Mobile Step Indicator */}
      {renderMobileStepIndicator()}
      
      {/* Background SVG */}
      <div className="signup-background-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="1475" height="916" viewBox="0 0 1475 916" fill="none">
          <path d="M-478.091 -351L-527.241 -24.4473L2595.18 1012.03L-478.091 -351Z" fill="url(#paint0_linear_840_126404)" fillOpacity="0.5"/>
          <defs>
            <linearGradient id="paint0_linear_840_126404" x1="-759.253" y1="-352.981" x2="2065.75" y2="1993.84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A3AFF"/>
              <stop offset="1" stopColor="#D2CEFF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Row className="g-0 min-vh-100">
        {/* Left Sidebar - Step Indicator */}
        <Col md="auto" className="d-none d-md-block left-container">
          <StepIndicator currentStep={currentStep} onStepClick={goToStep} />
        </Col>

        {/* Right Panel - Current Step Content */}
        <Col xs={12} md className={`d-flex align-items-start justify-content-center py-4 py-md-5 right-side ${currentStep === 3 ? 'step-3-wide' : ''}`}>
          <div className={`professional-signup-right-panel ${currentStep === 3 ? 'step-3-panel-wide' : ''}`}>
            {renderCurrentStep()}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
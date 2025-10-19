import { useState } from "react";
import { useSubStepNavigation } from "../../hooks/useSubStepNavigation";
import SubStepIndicator from "../../components/SubStepIndicator";
import SubStep1ServiceBuilder from "./SubStep1ServiceBuilder";
import SubStep2Services from "./SubStep2Services";
import SubStep3FAQs from "./SubStep3FAQs";
import SubStep4Features from "./SubStep4Features";
import ServicePreviewModal from "./ServicePreviewModal";
import SubStep5Theme from "./SubStep5Theme";

export default function Step3ServicesBuilder({ data, onUpdate, onNext, onPrev }) {
  const { currentSubStep, nextSubStep, prevSubStep, goToSubStep } = useSubStepNavigation(5);
  const [showPreview, setShowPreview] = useState(false);

  // Define sub-steps for Step 3 (Hero Sections)
  const step3SubSteps = [
    { number: 1, title: "Hero Section", shortTitle: "Hero", id: "hero-section" },
    { number: 2, title: "Sub Services", shortTitle: "Services", id: "sub-services" },
    { number: 3, title: "FAQs", shortTitle: "FAQs", id: "faqs" },
    { number: 4, title: "Features", shortTitle: "Features", id: "features" },
    { number: 5, title: "Theme", shortTitle: "Theme", id: "theme" }
  ];

  const handleSubStepNext = () => {
    if (currentSubStep === step3SubSteps.length) {
      onNext(); // Move to next main step
    } else {
      nextSubStep();
    }
  };

  const handleSubStepPrev = () => {
    if (currentSubStep === 1) {
      onPrev(); // Go back to previous main step
    } else {
      prevSubStep();
    }
  };

  const renderCurrentSubStep = () => {
    switch (currentSubStep) {
      case 1:
        return (
          <SubStep1ServiceBuilder
            data={data}
            onUpdate={onUpdate}
            onPrev={handleSubStepPrev}
            onNext={handleSubStepNext}
          />
        );
      case 2:
        return (
          <SubStep2Services
            data={data}
            onUpdate={onUpdate}
            onPrev={handleSubStepPrev}
            onNext={handleSubStepNext}
          />
        );
      case 3:
        return (
          <SubStep3FAQs
            data={data}
            onUpdate={onUpdate}
            onBack={handleSubStepPrev}
            onContinue={handleSubStepNext}
          />
        );
      case 4:
        return (
          <SubStep4Features
            data={data}
            onUpdate={onUpdate}
            onPrev={handleSubStepPrev}
            onNext={handleSubStepNext}
          />
        );
      case 5:
        return (
          <SubStep5Theme
            data={data}
            onUpdate={onUpdate}
            onPrev={handleSubStepPrev}
            onNext={handleSubStepNext}
          />
        );
      default:
        return (
          <SubStep1ServiceBuilder
            data={data}
            onUpdate={onUpdate}
            onPrev={handleSubStepPrev}
            onNext={handleSubStepNext}
          />
        );
    }
  };

  return (
    <div className="form-section">
      <SubStepIndicator 
        currentSubStep={currentSubStep} 
        onSubStepClick={goToSubStep}
        subSteps={step3SubSteps}
      />
      {renderCurrentSubStep()}
      <button
        type="button"
        className="preview-float-btn"
        onClick={() => setShowPreview(true)}
        aria-label="Open preview"
      >
        Preview
      </button>
      {showPreview && (
        <ServicePreviewModal data={data} onClose={() => setShowPreview(false)} />
      )}
    </div>
  );
}
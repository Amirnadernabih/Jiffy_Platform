import { useSubStepNavigation } from "../../hooks/useSubStepNavigation";
import SubStepIndicator from "../../components/SubStepIndicator";
import SubStep1BusinessDetails from "./SubStep1BusinessDetails";
import SubStep2Services from "./SubStep2Services";
import SubStep3Payment from "./SubStep3Payment";

export default function Step2BusinessInfo({ data, onUpdate, onNext, onPrev }) {
  const { currentSubStep, nextSubStep, prevSubStep, goToSubStep } = useSubStepNavigation();

  const handleSubStepNext = () => {
    if (currentSubStep === 3) {
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
          <SubStep1BusinessDetails
            data={data}
            onUpdate={onUpdate}
            onNext={handleSubStepNext}
            onPrev={handleSubStepPrev}
          />
        );
      case 2:
        return (
          <SubStep2Services
            data={data}
            onUpdate={onUpdate}
            onNext={handleSubStepNext}
            onPrev={handleSubStepPrev}
          />
        );
      case 3:
        return (
          <SubStep3Payment
            data={data}
            onUpdate={onUpdate}
            onNext={handleSubStepNext}
            onPrev={handleSubStepPrev}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-section">
      <SubStepIndicator 
        currentSubStep={currentSubStep} 
        onSubStepClick={goToSubStep}
      />
      {renderCurrentSubStep()}
    </div>
  );
}
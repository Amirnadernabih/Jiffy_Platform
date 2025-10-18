import { useState } from 'react';

export const useSubStepNavigation = (maxSubSteps = 5) => {
  const [currentSubStep, setCurrentSubStep] = useState(1);

  const nextSubStep = () => {
    setCurrentSubStep(prev => Math.min(prev + 1, maxSubSteps));
  };

  const prevSubStep = () => {
    setCurrentSubStep(prev => Math.max(prev - 1, 1));
  };

  const goToSubStep = (subStep) => {
    if (subStep >= 1 && subStep <= maxSubSteps) {
      setCurrentSubStep(subStep);
    }
  };

  return { currentSubStep, nextSubStep, prevSubStep, goToSubStep };
};
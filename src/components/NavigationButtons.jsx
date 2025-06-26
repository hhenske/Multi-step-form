import React from 'react';
import { useMultiStepForm } from '../context/MultiStepFormContext';
import './NavigationButtons.css';
import StepOne from './StepOne';


const NavigationButtons = ({ validate }) => {
    const { currentStep, setCurrentStep } = useMultiStepForm();

    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === 4;

   const handleNext = () => {
    if (validate && !validate()) {
      return;
    }

    if (isLastStep) {
      alert('Form submitted!');
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

    const handleBack = () => {
        if (!isFirstStep) setCurrentStep(prev => prev - 1);
    };


    return (
        <div className="nav-buttons">
            {isFirstStep? <div className="spacer" /> : (
                <button className="btn-back" onClick={handleBack}>
                    Go Back
                </button>
            )}
            <button
                className={`btn-next ${isLastStep ? 'btn-confirm' : ''}`}
                onClick={handleNext}>
                    {isLastStep ? 'Confirm' : 'Next Step'}

            </button>
        </div>
    );
};

export default NavigationButtons;
      
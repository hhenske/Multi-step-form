import React from 'react';
import { useMultiStepForm } from '../context/MultiStepFormContext';
import './NavigationButtons.css';
import StepOne from './StepOne';


const NavigationButtons = () => {
    const { currentStep, setCurrentStep } = useMultiStepForm();

    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === 4;

    const handleNext = () => {
        if (currentStep === 1 && typeof StepOne.validate === 'function') {
            const isValid = StepOne.validate();
            if (!isValid) return;
        }
  
        if (!isLastStep) {
            setCurrentStep(prev => prev + 1);
        } else {
            alert('Form submitted!');
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
      
import React, { useContext, useRef } from 'react';
import { useMultiStepForm } from '../context/MultiStepFormContext';
import './StepFormContainer.css';
import NavigationButtons from './NavigationButtons';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';


const StepFormContainer = ({ children }) => {
    const { currentStep } = useMultiStepForm();
    const stepOneRef = useRef();


    // console.log("Current Step: ", currentStep);

    const stepComponents = [
    <StepOne ref={stepOneRef} key="1" />, 
    <StepTwo key="2" />,
    <StepThree key="3" />,
    <StepFour key="4" />,
    ];

     const validateCurrentStep = () => {
    if (currentStep === 1) {
        return stepOneRef.current?.validate?.() ?? true;
  }
    return true;
    };

    
function getStepTitle(step) {
    switch (step) {
        case 1: return 'Personal info';
        case 2: return 'Select your plan';
        case 3: return 'Select add-ons';
        case 4: return 'Finishing up';
        default: return '';
    }
}

function getStepDescription(step) {
    switch (step) {
        case 1: return 'Please provide your name, email, and phone number';
        case 2: return 'You have the option of monthly or yearly billing';
        case 3: return 'Add-ons help enhance your gaming experience';
        case 4: return 'Double-check everything looks OK before confirming';
        default: return '';
    }
}


    return (
        <div className="step-form-container">
            <div className="step-header">
                <h1 className="step-title">
                    {getStepTitle(currentStep)}
                </h1>
                <p className="step-description">
                    {getStepDescription(currentStep)}
                </p>
            </div>

            <div className="step-content">
                {stepComponents[currentStep - 1]}
            </div>

            <NavigationButtons  validate={validateCurrentStep} />
        </div>
    );
};


export default StepFormContainer
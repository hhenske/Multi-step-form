import React, { useRef } from 'react';
import { useMultiStepForm } from '../context/MultiStepFormContext';
import './StepFormContainer.css';
import NavigationButtons from './NavigationButtons';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const stepRefs = [
  useRef(), // StepOne
  useRef(), // StepTwo
  useRef(), // StepThree
  useRef(), // StepFour
];

const StepFormContainer = () => {
  const { currentStep } = useMultiStepForm();

  const stepComponents = [
    <StepOne ref={stepRefs[0]} key="1" />,
    <StepTwo ref={stepRefs[1]} key="2" />,
    <StepThree ref={stepRefs[2]} key="3" />,
    <StepFour ref={stepRefs[3]} key="4" />,
  ];

  const validateCurrentStep = () => {
  const currentRef = stepRefs[currentStep - 1];
  const isValid = currentRef.current?.validate?.() ?? true;
  console.log(`Validating step ${currentStep}:`, isValid);
  return isValid;
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
        <h1 className="step-title">{getStepTitle(currentStep)}</h1>
        <p className="step-description">{getStepDescription(currentStep)}</p>
      </div>

      <div className="step-content">
        {stepComponents[currentStep - 1]}
      </div>

      <NavigationButtons validate={validateCurrentStep} />
    </div>
  );
};

export default StepFormContainer;

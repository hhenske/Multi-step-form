import React, { useContext } from 'react';
import { useMultiStepForm } from '../context/MultiStepFormContext';
import './StepFormContainer.css';
import NavigationButtons from './NavigationButtons';

const StepFormContainer = ({ children }) => {
    const { currentStep } = useMultiStepForm();

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
                {children}
            </div>

            <NavigationButtons />
        </div>
    );
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

export default StepFormContainer
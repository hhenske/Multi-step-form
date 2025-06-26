import React, { useContext } from 'react';
import { useMultiStepForm } from '../context/MultiStepFormContext';
import './Sidebar.css';

const steps = [
    { number: 1, label:"Your Info" },
    { number: 2, label: "Select Plan" },
    { number: 3, label: "Add-ons" },
    { number: 4, label: "Summary" }
]

const Sidebar = () => {
    const { currentStep } = useMultiStepForm();

    return (
        <aside className="sidebar">
            <div className="sidebar-background" />


            <ul className="step-list">
                {steps.map((step) => (
                <li key={step.number} className="step-item">
                    <div className={`step-number ${currentStep === step.number ? 'active' : ''}`}>
                        {step.number}
                    </div>
                    <div className="step-label">
                        <span className="step-text">Step {step.number}</span>
                        <span className="step-title">{step.label}</span>
                    </div>
                </li>
             ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
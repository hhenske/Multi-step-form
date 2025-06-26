
import React from 'react';
import { useMultiStepForm } from'../context/MultiStepFormContext';

function StepFour() {
    const { formData } = useMultiStepForm();

    const selectedPlan = {
        arcade: 'Arcade',
        advanced: 'Advanced',
        pro: 'Pro',
    } [formData.plan];

    const addOnDetails = {
        onlineService: 'Online service',
        largerStorage: 'Larger storage',
        customProfile: 'Customizable profile',
    };


    return (
        <div className="step-form">
            <div className="summary">
                <div className="summary-header">
                    <strong>{selectedPlan} ({formData.isMonthly ? 'Monthly' : 'Yearly'})</strong>
                    <a href="#">Change</a>
                </div>
                <hr />
                <ul className="summary-addons">
                    {(formData.addOns || []).map(id => (
                        <li key={id}>{addOnDetails[id]}</li>
                    ))}
                </ul>
            </div>

            <div className="summary-total">
                <span>Total (per {formData.isMonthly ? 'month' : 'year'})</span>
                    {/* calulate total here */}
                <strong>$XX/{formData.isMonthly ? 'mo' : 'yr'}</strong>
            </div>
        </div>
    );
}



export default StepFour;
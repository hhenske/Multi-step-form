import React, { forwardRef, useImperativeHandle, useEffect } from 'react';
import { useMultiStepForm } from'../context/MultiStepFormContext';
import './StepTwo.css';
import iconArcade from '../assets/images/icon-arcade.svg';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconPro from '../assets/images/icon-pro.svg';


const plans = [
    {
        id: 'arcade',
        name: 'Arcade',
        priceMonthly: '$9/mo',
        priceYearly: '$90/yr',
        icon: iconArcade
    },
    {
        id: 'advanced',
        name: 'Advanced',
        priceMonthly: '$12/mo',
        priceYearly: '$120/yr',
        icon:iconAdvanced
    },
    {
        id: 'pro',
        name: 'Pro',
        priceMonthly: '$15/mo',
        priceYearly: '$150/yr',
        icon: iconPro
    },
];

const StepTwo = forwardRef((props, ref) => {
  const { formData, updateFormData } = useMultiStepForm();

  useEffect(() => {
  console.log("StepTwo mounted. Plan:", formData.plan);
}, []);


  // Expose the validate function to parent via ref
  useImperativeHandle(ref, () => ({
    validate,
  }));

  const validate = () => {
    return !!formData.plan; // true if a plan is selected
  };

  const handlePlanSelect = (planId) => {
    updateFormData({ plan: planId });
  };

  const toggleBilling = () => {
    updateFormData({ isMonthly: !formData.isMonthly });
  };
  console.log("Current plan: ", formData.plan);
return (
    <div className="step-form">
      <div className="plan-options">
        {plans.map((plan) => {
          const isActive = formData.plan === plan.id;

          return (
            <div
              key={plan.id}
              className={`plan-card ${isActive ? 'active' : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              <img src={plan.icon} alt={`${plan.name} icon`} className="plan-icon" />
              <div className="plan-info">
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  {formData.isMonthly ? plan.priceMonthly : plan.priceYearly}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="billing-toggle">
        <span className={!formData.isMonthly ? 'faded' : 'selected'}>Monthly</span>
        <div className="toggle-switch" onClick={toggleBilling}>
          <div className={`toggle-circle ${formData.isMonthly ? '' : 'right'}`}></div>
        </div>
        <span className={formData.isMonthly ? 'faded' : 'selected'}>Yearly</span>
      </div>
    </div>
  );
});

export default StepTwo;
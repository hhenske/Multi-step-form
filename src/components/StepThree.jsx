import React from 'react';
import { useMultiStepForm } from'../context/MultiStepFormContext';
import './StepThree.css';

const addOns = [
  {
    id: 'onlineService',
    title: 'Online service',
    description: 'Access to multiplayer games',
    priceMonthly: '+$1/mo',
    priceYearly: '+$10/yr',
  },
  {
    id: 'largerStorage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    priceMonthly: '+$2/mo',
    priceYearly: '+$20/yr',
  },
  {
    id: 'customProfile',
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    priceMonthly: '+$2/mo',
    priceYearly: '+$20/yr',
  },
];


function StepThree() {
  const { formData, updateFormData } = useMultiStepForm();

    const handleToggle = (id) => {
    const current = formData.addOns || [];
    const updated = current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id];
    updateFormData({ addOns: updated });
  };

  return (
    <div className="step-form">
      {addOns.map(addOn => {
        const isChecked = formData.addOns?.includes(addOn.id);
        return (
          <label key={addOn.id} className={`addon-card ${isChecked ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle(addOn.id)}
            />
            <div className="addon-info">
              <div className="addon-title">{addOn.title}</div>
              <div className="addon-description">{addOn.description}</div>
            </div>
            <div className="addon-price">
              {formData.isMonthly ? addOn.priceMonthly : addOn.priceYearly}
            </div>
          </label>
        );
      })}
    </div>
  )
}



export default StepThree;
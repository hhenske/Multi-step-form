import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useMultiStepForm } from '../context/MultiStepFormContext';


const StepOne = forwardRef((props, ref) => {
  const { formData, updateFormData } = useMultiStepForm();
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    updateFormData({ [e.target.name]: e.target.value });
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  }

  useImperativeHandle(ref, () => ({
    validate,
  }));

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  console.log("StepOne is rendering");

  return (
  <div id="step-one" className="step-form">
    <div className="form-group">
        <div className="label-row">
        <label htmlFor="name">Name</label>
        {errors.name && <span className="error-text">{errors.name}</span>}
    </div>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Stephen King"
        className={errors.name ? 'input error' : 'input'}
      />
    </div>

    <div className="form-group">
        <div className="label-row">
            <label htmlFor="email">Email Address</label>
            {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            className={errors.email ? 'input error' : 'input'}
        />
        </div>

    <div className="form-group">
        <div className="label-row">
        <label htmlFor="phone">Phone Number</label>
        {errors.phone && <span className="error-text">{errors.phone}</span>}
    </div>
      <input
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="e.g. +1 234 567 890"
        className={errors.phone ? 'input error' : 'input'}
      />
    </div>
  </div>
);

});


export default StepOne;

import React, { useState } from 'react';
import { useMultiStepForm } from'../context/MultiStepFormContext';

function StepOne() {
    const { formData, updateFormData } = useMultiStepForm();
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        updateFormData({ [e.target.name]: e.target.value});
        setErrors(prev => ({ ...prev, [e.target.name]: ''}));
    }

    //validation
    function validate() {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;

    }

    
    return (
        <div className="step-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Stephen King"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email"> Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. stephenking@lorem.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 234 567 890"
                />
            </div>
        </div>
    );
}

export default StepOne;
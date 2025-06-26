import React, { createContext, useState, useContext } from 'react';

//create context
const MultiStepFormContext = createContext();

//create provider component
export function MultiStepFormProvider({ children }) {
    //state for all form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        plan: '',
        isMonthly: true
    });

    function updateFormData(newData) {
        setFormData(prev => ({
            ...prev,
            ...newData,
        }));
    }

    //set control step
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <MultiStepFormContext.Provider
            value={{ formData, updateFormData, currentStep, setCurrentStep }}
            >
                {children}
            </MultiStepFormContext.Provider>
    );
}

//custom hook for consuming the context easily
export function useMultiStepForm() {
    return useContext(MultiStepFormContext);
}
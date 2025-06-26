import React from 'react';
import { useMultiStepForm } from "./context/MultiStepFormContext";
import Sidebar from './components/Sidebar';
// import StepCircles from './components/StepCircles';
import StepFormContainer from './components/StepFormContainer';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';



function App() {
  const { currentStep } = useMultiStepForm();

  
  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
  ];
  
  return (
    <div className="app-wrapper">
      <div className="form-container">
        {/* Desktop sidebar */}
        <Sidebar />
        <StepFormContainer>
        {steps[currentStep-1]}
        </StepFormContainer>
      </div>
    </div>
  );
}

export default App;
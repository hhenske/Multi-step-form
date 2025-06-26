import React from 'react';
import { StrictMode } from 'react';
import { ReactDOM, createRoot } from 'react-dom/client'; 
import { MultiStepFormProvider } from './context/MultiStepFormContext';
import './styles/index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './styles/fonts.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MultiStepFormProvider>
        <App />
      </MultiStepFormProvider>
    </BrowserRouter>
  </StrictMode>,
)

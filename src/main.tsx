import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './assets/styles/index.css'
import LandingPage from './pages/LandingPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  
);

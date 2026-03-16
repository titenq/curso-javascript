import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';

import App from './App.jsx';
import './index.css';

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (measurementId) {
  ReactGA.initialize(measurementId);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

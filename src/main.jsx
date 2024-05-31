import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';

import App from './App.jsx';
import './index.css';

ReactGA.initialize('G-FJ7RFRTS7X');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

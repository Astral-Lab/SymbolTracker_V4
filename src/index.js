import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="https://astral-lab.github.io/SymbolTracker_V3/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
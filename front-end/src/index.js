import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SectorPage from './pages/sectorPage';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/setor/:selectedOption" element={<SectorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
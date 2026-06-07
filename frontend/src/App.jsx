import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SoilPage from './pages/SoilPage';
import CropListPage from './pages/CropListPage';
import CropDetailPage from './pages/CropDetailPage';
import KisanMitraChat from './components/KisanMitraChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"                          element={<LandingPage />} />
        <Route path="/soils"                     element={<SoilPage />} />
        <Route path="/crops/:soilId"             element={<CropListPage />} />
        <Route path="/crops/:soilId/:cropIndex"  element={<CropDetailPage />} />
      </Routes>

      {/* Kisan Mitra chatbot — rendered outside Routes so it persists on all pages */}
      <KisanMitraChat />
    </Router>
  );
}

export default App;

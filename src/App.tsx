import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Auth from './pages/Auth';
import AboutYou from './pages/onboarding/AboutYou';
import CoverPhotoUpload from './pages/onboarding/CoverPhotoAsk';
import PDFUpload from './pages/onboarding/PDFUpload';
import Bio from './pages/onboarding/Bio';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/auth" element={<Auth />} />
          {/* Add more Route components here for additional pages */}
          <Route path="/aboutyou" element={<AboutYou />} ></Route>
          <Route path="/coverphoto" element={<CoverPhotoUpload />} ></Route>
          <Route path="/pdfupload" element={<PDFUpload />} ></Route>
          <Route path="/bio" element={<Bio />} ></Route>


        </Routes>
      </div>
    </Router>
  );
}

export default App;

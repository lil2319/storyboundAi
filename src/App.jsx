import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./index.css";
import Home from './pages/Home.jsx';
import RecommendationPage from './pages/recommendationPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RecommendationPage" element={<RecommendationPage />} />
    </Routes>
  );
}

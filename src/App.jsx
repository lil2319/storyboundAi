import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useComputedColorScheme } from '@mantine/core';
import './index.css';
import '@mantine/core/styles.css';

import Home from './pages/Home.jsx';
import RecommendationPage from './pages/RecommendationPage.jsx';

export default function App() {
  const { colorScheme } = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <div className={`app-wrapper ${colorScheme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecommendationPage" element={<RecommendationPage />} />
      </Routes>
    </div>
  );
}

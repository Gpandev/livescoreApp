import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FootballPage } from '../pages/Football/FootballPage';
import { TennisPage } from '../pages/Tennis/TennisPage';
import { ResponsiveAppBar } from './AppHeader';
import { BasketballPage } from '../pages/BasketBall/BasketballPage';
import { VolleyballPage } from '../pages/Volleyball/VolleyballPage';
import { Box, Tab, Tabs } from '@mui/material';

const pages = [
  'Football',
  'Tennis',
  'Volleyball',
  'Basketball',
  'Handball',
  'Snooker',
];

const AppRouter: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Router>
        <ResponsiveAppBar onChangeTab={setValue} value={value} />

        <Routes>
          <Route path="/" element={<FootballPage />} />
          <Route path="/tennis" element={<TennisPage />} />
          <Route path="/volleyball" element={<VolleyballPage />} />
          <Route path="/basketball" element={<BasketballPage />} />
          <Route path="/handball" element={<TennisPage />} />
          <Route path="/snooker" element={<TennisPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

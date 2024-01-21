import * as React from 'react';
import Button from '@mui/material/Button';
import { FootballPage } from '../pages/Football/FootballPage';
import { TennisPage } from '../pages/Tennis/TennisPage';
import { BasketballPage } from '../pages/BasketBall/BasketballPage';

const pages = [
  'Football',
  'Tennis',
  'Volleyball',
  'Basketball',
  'Handball',
  'Snooker',
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const ResponsiveAppBar: React.FC = () => {
  const handleOpenPage = (page: string) => {
    console.log(page);

    if (page === 'Tennis') {
      console.log('aaaaaaaaaaaaaaa');

      return <TennisPage />;
    }
    if (page === 'Basketball') {
      return <BasketballPage />;
    }

    return <FootballPage />;
  };

  return (
    <>
      {pages.map((page) => (
        <Button key={page} onClick={() => handleOpenPage(page)}>
          {page}
        </Button>
      ))}
    </>
  );
};

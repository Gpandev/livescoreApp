import * as React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

const pages = [
  'Football',
  'Tennis',
  'Volleyball',
  'Basketball',
  'Handball',
  'Snooker',
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface Props {
  onChangeTab: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}

export const ResponsiveAppBar: React.FC<Props> = ({ onChangeTab, value }) => {
  const renderIcon = (page: string) => {
    switch (page) {
      case 'Football':
        return <SportsSoccerIcon />;
      case 'Tennis':
        return <SportsTennisIcon />;
      case 'Volleyball':
        return <SportsVolleyballIcon />;
      case 'Basketball':
        return <SportsBasketballIcon />;
      case 'Handball':
        return <SportsHandballIcon />;
      case 'Snooker':
        return <SportsSoccerIcon />;

      default:
        return <></>;
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    onChangeTab(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={(e, value) => handleChange(e, value)}
      centered
      role="navigation"
    >
      {pages.map((page) => (
        <Tab
          key={page}
          icon={renderIcon(page)}
          label={`${page}`}
          href={`/${page === 'Football' ? '' : page.toLocaleLowerCase()}`}
        />
      ))}
    </Tabs>
  );
};

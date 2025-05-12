import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { HOME } from '../../constants/routes';
import { NavMenu } from '../NavMenu';

export const AppHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isHome = pathname === HOME;

  const handleClick = () => {
    if (!isHome) {
      navigate(HOME);
    }
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 16px 0 16px',
        borderBottom: '1px solid black',
      }}
    >
      <p
        style={{
          fontFamily: 'JupiterCrash',
          fontSize: '60px',
          cursor: isHome ? 'initial' : 'pointer',
        }}
        onClick={handleClick}
      >
        Skrap World
      </p>
      <NavMenu />
    </header>
  );
};

import React from 'react';

import { NavMenu } from '../NavMenu';

import './AppHeader.css';

export const AppHeader = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 16px 0 16px',
        borderBottom: '1px solid black',
      }}
    >
      Skrap World
      <NavMenu />
    </header>
  );
}

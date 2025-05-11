import React from 'react';

import { NavMenu } from '../NavMenu';

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
      <p style={{ fontFamily: 'JupiterCrash', fontSize: '60px' }}>Skrap World</p>
      <NavMenu />
    </header>
  );
}

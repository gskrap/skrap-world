import React from 'react';

import { FaBomb } from 'react-icons/fa6';

export const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <FaBomb size={240} />
      <p style={{ marginTop: '16px' }}>[wip: rebuilding the site for 2025]</p>
    </div>
  );
};

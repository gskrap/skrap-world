import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { HOME, ABOUT, LINKS } from '../../constants/routes';

export const NavMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <select onChange={handleChange} value={pathname}>
        <option value={HOME}>Home</option>
        <option value={ABOUT}>About</option>
        <option value={LINKS}>Links</option>
      </select>
    </div>
  );
};

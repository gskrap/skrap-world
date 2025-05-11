import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { HOME, LINKS, MORE } from '../../constants/routes';

export const NavMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      <select onChange={handleChange} value={location.pathname}>
        <option value={HOME}>home</option>
        <option value={LINKS}>links</option>
        <option value={MORE}>more</option>
      </select>
    </div>
  )
}

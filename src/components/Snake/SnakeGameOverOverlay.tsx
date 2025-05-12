import React from 'react';

import { BORDER_SIZE, CELL_SIZE, GRID_DIMENSION } from './constants';

export const SnakeGameOverOverlay = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: `${GRID_DIMENSION * CELL_SIZE + BORDER_SIZE}px`,
        width: `${GRID_DIMENSION * CELL_SIZE + BORDER_SIZE}px`,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      }}
    />
  );
};

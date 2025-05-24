import React from 'react';

import { BORDER_SIZE, GRID_DIMENSION } from './constants';

interface OwnProps {
  handleStartGame: () => void;
  handleResetGame: () => void;
  isGameRunning: boolean;
  isGameLost: boolean;
  score: number;
  cellSize: number;
}

export const SnakeGameOverOverlay = ({
  handleResetGame,
  handleStartGame,
  isGameRunning,
  isGameLost,
  score,
  cellSize,
}: OwnProps) => {
  if (isGameRunning) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: `${GRID_DIMENSION * cellSize + BORDER_SIZE}px`,
        width: `${GRID_DIMENSION * cellSize + BORDER_SIZE}px`,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isGameLost
        ? <button onClick={handleResetGame}>Reset</button>
        : <button onClick={handleStartGame}>Start</button>
      }
      <div style={{ marginTop: '8px' }}>Score: {score}</div>
    </div>
  );
};

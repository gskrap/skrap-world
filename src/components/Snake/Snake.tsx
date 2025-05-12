import React, { KeyboardEvent, useCallback, useEffect, useReducer, useRef } from 'react';

import { GRID_DIMENSION, CELL_SIZE, BORDER_SIZE, ArrowDirectionMap } from './constants';
import { SnakeGameOverOverlay } from './SnakeGameOverOverlay';
import { initialState, snakeReducer } from './snakeReducer';
import { isSamePosition, doesSnakeContainPosition } from './utils';

export const Snake = () => {
  const [state, dispatch] = useReducer(snakeReducer, initialState);
  const { snake, food, score, isGameRunning, isGameLost } = state;

  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGameRunning) return;

    const interval = setInterval(() => {
      dispatch({ type: 'MOVE_SNAKE' });
    }, 150);

    return () => clearInterval(interval);
  }, [isGameRunning]);

  const handleStartGame = () => {
    boardRef.current?.focus();
    dispatch({ type: 'START_GAME' });
  };

  const handleResetGame = () => {
    dispatch({ type: 'RESET' });
  };

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const direction = ArrowDirectionMap[e.nativeEvent.key];

    if (direction !== undefined) {
      dispatch({ type: 'CHANGE_DIRECTION', direction });
    }
  }, []);

  return (
    <div>
      <button onClick={handleStartGame}>Start</button>
      <button onClick={handleResetGame}>Reset</button>
      <div>score: {score}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative' }}>
          <div
            style={{ border: `${BORDER_SIZE}px solid black` }}
            onKeyDown={handleKeyDown}
            ref={boardRef}
            tabIndex={0}
          >
            {Array.from({ length: GRID_DIMENSION }).map((_, rowIdx) => (
              <div key={rowIdx} style={{ display: 'flex' }}>
                {Array.from({ length: GRID_DIMENSION }).map((_, colIdx) => (
                  <div
                    key={colIdx}
                    style={{
                      height: `${CELL_SIZE}px`,
                      width: `${CELL_SIZE}px`,
                      ...(isSamePosition(food, [rowIdx, colIdx]) && {
                        background: 'red',
                      }),
                      ...(doesSnakeContainPosition(snake, [rowIdx, colIdx]) && {
                        background: 'green',
                      }),
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          {isGameLost && <SnakeGameOverOverlay />}
        </div>
      </div>
    </div>
  );
};

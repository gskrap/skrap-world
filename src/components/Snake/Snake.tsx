import React, { KeyboardEvent, useCallback, useEffect, useReducer, useRef, useState } from 'react';

import { GRID_DIMENSION, CELL_SIZE, BORDER_SIZE, ArrowDirectionMap } from './constants';
import { DirectionalPad } from './DirectionalPad';
import { SnakeGameOverOverlay } from './SnakeGameOverOverlay';
import { initialState, snakeReducer } from './snakeReducer';
import { getCellClass } from './styleHelpers';
import { Direction } from './types';

import './Snake.css';

export const Snake = () => {
  const [state, dispatch] = useReducer(snakeReducer, initialState);
  const { snake, food, direction, score, isGameRunning, isGameLost } = state;

  const boardContainerRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState(CELL_SIZE);

  useEffect(() => {
    const container = boardContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      const availableSize = Math.min(width, height);
      const size = Math.floor(availableSize / GRID_DIMENSION);
      setCellSize(size);
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!isGameRunning) return;

    const interval = setInterval(() => {
      dispatch({ type: 'MOVE_SNAKE' });
    }, 100);

    return () => clearInterval(interval);
  }, [isGameRunning]);

  const handleStartGame = () => {
    boardRef.current?.focus();
    dispatch({ type: 'START_GAME' });
  };

  const handleResetGame = () => {
    dispatch({ type: 'RESET' });
  };

  const handleDirectionChange = (direction: Direction) => {
    dispatch({ type: 'CHANGE_DIRECTION', direction });
  };

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const direction = ArrowDirectionMap[e.nativeEvent.key];

    if (direction !== undefined) {
      handleDirectionChange(direction);
    }
  }, []);

  return (
    <div
      ref={boardContainerRef}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ position: 'relative' }}>
        <div
          style={{ border: `${BORDER_SIZE}px solid black`, outline: 'none' }}
          onKeyDown={handleKeyDown}
          ref={boardRef}
          tabIndex={0}
        >
          {Array.from({ length: GRID_DIMENSION }).map((_, rowIdx) => (
            <div key={rowIdx} style={{ display: 'flex' }}>
              {Array.from({ length: GRID_DIMENSION }).map((_, colIdx) => (
                <div
                  key={`${rowIdx-colIdx}`}
                  className={getCellClass({
                    position: [rowIdx, colIdx],
                    food,
                    snake,
                    direction,
                  })}
                  style={{
                    height: `${cellSize}px`,
                    width: `${cellSize}px`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <SnakeGameOverOverlay
          handleStartGame={handleStartGame}
          handleResetGame={handleResetGame}
          isGameRunning={isGameRunning}
          isGameLost={isGameLost}
          score={score}
          cellSize={cellSize}
        />
      </div>
      <DirectionalPad onDirectionChange={handleDirectionChange} />
    </div>
  );
};

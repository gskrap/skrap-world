import React, { KeyboardEvent, useCallback, useEffect, useReducer, useRef } from 'react';

import { GRID_DIMENSION, CELL_SIZE, BORDER_SIZE, ArrowDirectionMap } from './constants';
import { SnakeGameOverOverlay } from './SnakeGameOverOverlay';
import { initialState, snakeReducer } from './snakeReducer';
import { Direction, Position } from './types';
import { isSamePosition, doesSnakeContainPosition } from './utils';

import './Snake.css';

export const Snake = () => {
  const [state, dispatch] = useReducer(snakeReducer, initialState);
  const { snake, food, direction, score, isGameRunning, isGameLost } = state;

  const boardRef = useRef<HTMLDivElement>(null);

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

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const direction = ArrowDirectionMap[e.nativeEvent.key];

    if (direction !== undefined) {
      dispatch({ type: 'CHANGE_DIRECTION', direction });
    }
  }, []);

  const getHeadFillClass = () => {
    switch (direction) {
      case Direction.RIGHT:
        return 'head-right';
      case Direction.LEFT:
        return 'head-left';
      case Direction.UP:
        return 'head-up';
      case Direction.DOWN:
        return 'head-down';
      default:
        return '';
    }
  };

  const getTailFillClass = () => {
    if (snake.length < 2) return '';
    const tail = snake[snake.length - 1];
    const beforeTail = snake[snake.length - 2];

    const [r1, c1] = beforeTail;
    const [r2, c2] = tail;

    if (r2 === r1 && c2 === c1 - 1) return 'tail-right'; // tail moving right
    if (r2 === r1 && c2 === c1 + 1) return 'tail-left'; // tail moving left
    if (r2 === r1 + 1 && c2 === c1) return 'tail-up'; // tail moving up
    if (r2 === r1 - 1 && c2 === c1) return 'tail-down'; // tail moving down

    return '';
  };

  const getCellClass = (position: Position) => {
    const isFood = isSamePosition(food, position);
    const isHead = isSamePosition(snake[0], position);
    const isTail = isSamePosition(snake[snake.length - 1], position);
    const isBody = doesSnakeContainPosition(snake, position);

    if (isFood) return 'food';
    if (isHead) return getHeadFillClass();
    if (isTail) return getTailFillClass();
    if (isBody) return 'body';

    return '';
  };

  return (
    <div>
      <button onClick={handleStartGame}>Start</button>
      <button onClick={handleResetGame}>Reset</button>
      <div>score: {score}</div>
      <div style={{ display: 'flex' }}>
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
                    className={getCellClass([rowIdx, colIdx])}
                    style={{
                      height: `${CELL_SIZE}px`,
                      width: `${CELL_SIZE}px`,
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

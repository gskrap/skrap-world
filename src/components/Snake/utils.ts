import { GRID_DIMENSION } from './constants';
import { Direction, Position, Snake } from './types';

export const isSamePosition = (positionA: Position, positionB: Position) => (
  positionA[0] === positionB[0] && positionA[1] === positionB[1]
);

export const doesSnakeContainPosition = (snake: Snake, position: Position) => {
  for (var i = 0; i < snake.length; i++) {
    let segment = snake[i];
    if (segment[0] === position[0] && segment[1] === position[1]) return true;
  }
  return false;
};

export const getRandomUnusedPosition = (snake: Snake): Position => {
  const unusedPositions: Position[] = [];
  for (let x = 0; x < GRID_DIMENSION; x++) {
    for (let y = 0; y < GRID_DIMENSION; y++) {
      const position: Position = [x, y];
      if (!doesSnakeContainPosition(snake, position)) {
        unusedPositions.push(position);
      }
    }
  }

  if (unusedPositions.length === 0) {
    throw new Error('No positions unused');
  }

  const randomIndex = Math.floor(Math.random() * unusedPositions.length);
  return unusedPositions[randomIndex];
};

export const isInvalidDirectionChange = (inputDirection: Direction, currentDirection: Direction) => {
  return (
    (inputDirection === currentDirection) ||
    (inputDirection === Direction.UP && currentDirection === Direction.DOWN) ||
    (inputDirection === Direction.DOWN && currentDirection === Direction.UP) ||
    (inputDirection === Direction.LEFT && currentDirection === Direction.RIGHT) ||
    (inputDirection === Direction.RIGHT && currentDirection === Direction.LEFT)
  );
};

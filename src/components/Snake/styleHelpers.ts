import { Direction, Position, Snake } from './types';
import { doesSnakeContainPosition, isSamePosition } from './utils';

const getHeadFillClass = (direction: Direction) => {
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

const getTailFillClass = (snake: Snake) => {
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

export const getCellClass = ({
  position,
  food,
  snake,
  direction,
}: {
  position: Position,
  food: Position,
  snake: Snake,
  direction: Direction,
}) => {
  const isFood = isSamePosition(food, position);
  const isHead = isSamePosition(snake[0], position);
  const isTail = isSamePosition(snake[snake.length - 1], position);
  const isBody = doesSnakeContainPosition(snake, position);

  if (isFood) return 'food';
  if (isHead) return getHeadFillClass(direction);
  if (isTail) return getTailFillClass(snake);
  if (isBody) return 'body';

  return '';
};

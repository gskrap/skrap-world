import { GRID_DIMENSION } from './constants';
import { Direction, Position, Snake } from './types';
import { getRandomUnusedPosition, doesSnakeContainPosition, isInvalidDirectionChange, isSamePosition } from './utils';

type SnakeAction =
  | { type: 'START_GAME' }
  | { type: 'CHANGE_DIRECTION'; direction: Direction }
  | { type: 'MOVE_SNAKE' }
  | { type: 'RESET' };

interface SnakeState {
  isGameRunning: boolean;
  snake: Snake;
  growthRemaining: number;
  food: Position;
  direction: Direction;
  nextDirection: Direction;
  score: number;
  isGameLost: boolean;
}

const initialSnake: Snake = [[2, 6], [2, 5], [2, 4], [2, 3], [2, 2]];

export const initialState: SnakeState = {
  isGameRunning: false,
  snake: initialSnake,
  growthRemaining: 0,
  food: getRandomUnusedPosition(initialSnake),
  direction: Direction.RIGHT,
  nextDirection: Direction.RIGHT,
  score: 0,
  isGameLost: false,
};

export const snakeReducer = (
  state: SnakeState,
  action: SnakeAction
): SnakeState => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isGameRunning: true,
      };
    case 'CHANGE_DIRECTION':
      if (isInvalidDirectionChange(action.direction, state.direction)) return state;

      return {
        ...state,
        nextDirection: action.direction,
      };
    case 'MOVE_SNAKE':
      const head = state.snake[0];
      const newDirection = state.nextDirection;
      let newHead: Position;

      switch (newDirection) {
        case Direction.LEFT:
          newHead = [head[0], head[1] - 1];
          break;
        case Direction.UP:
          newHead = [head[0] - 1, head[1]];
          break;
        case Direction.RIGHT:
          newHead = [head[0], head[1] + 1];
          break;
        case Direction.DOWN:
          newHead = [head[0] + 1, head[1]];
          break;
      }

      const didEat = isSamePosition(state.food, newHead);

      const didCrash =
        newHead[0] < 0 ||
        newHead[0] >= GRID_DIMENSION ||
        newHead[1] < 0 ||
        newHead[1] >= GRID_DIMENSION ||
        doesSnakeContainPosition(state.snake, newHead);

      const growth = didEat ? state.growthRemaining + 3 : state.growthRemaining;
      const newSnakeBody = growth > 0 ? state.snake : state.snake.slice(0, -1);
      const newSnake = didCrash ? state.snake : [newHead, ...newSnakeBody];
      const newFood = didEat ? getRandomUnusedPosition(newSnake) : state.food;
      const newScore = didEat ? state.score + 1 : state.score;
      const newGrowthRemaining = growth > 0 ? growth - 1 : 0;

      return {
        ...state,
        snake: newSnake,
        growthRemaining: newGrowthRemaining,
        food: newFood,
        direction: newDirection,
        score: newScore,
        isGameRunning: !didCrash,
        isGameLost: didCrash,
      };
    case 'RESET':
      return {
        ...initialState,
        food: getRandomUnusedPosition(initialState.snake),
        isGameLost: false,
      };
    default:
      return state;
  }
};

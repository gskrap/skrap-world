import { Direction } from './types';

// number of rows and columns
export const GRID_DIMENSION = 30;

// size in px of each cell
export const CELL_SIZE = 24;

// size in px of border
export const BORDER_SIZE = 4;

export const ArrowDirectionMap: Record<string, Direction> = {
  ArrowUp: Direction.UP,
  ArrowRight: Direction.RIGHT,
  ArrowDown: Direction.DOWN,
  ArrowLeft: Direction.LEFT,
};

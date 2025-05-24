import React from 'react';

import { FaArrowUp, FaArrowLeft, FaArrowRight, FaArrowDown } from 'react-icons/fa6';

import { Direction } from './types';

import './DirectionalPad.css';

interface OwnProps {
  onDirectionChange: (direction: Direction) => void;
}

export const DirectionalPad = ({ onDirectionChange }: OwnProps) => {
  return (
    <div className="d-pad">
      <div />
      <button
        className="button"
        onClick={() => onDirectionChange(Direction.UP)}
      >
        <FaArrowUp />
      </button>
      <div />
      <button
        className="button"
        onClick={() => onDirectionChange(Direction.LEFT)}
      >
        <FaArrowLeft />
      </button>
      <div />
      <button
        className="button"
        onClick={() => onDirectionChange(Direction.RIGHT)}
      >
        <FaArrowRight />
      </button>
      <div />
      <button
        className="button"
        onClick={() => onDirectionChange(Direction.DOWN)}
      >
        <FaArrowDown />
      </button>
      <div />
    </div>
  );
};

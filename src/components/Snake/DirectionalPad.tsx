import React from 'react';

import { FaArrowUp, FaArrowLeft, FaArrowRight, FaArrowDown } from 'react-icons/fa6';
// @ts-ignore
import ReactNipple from 'react-nipple';

import { Direction } from './types';

import './DirectionalPad.css';

interface OwnProps {
  onDirectionChange: (direction: Direction) => void;
}

export const DirectionalPad = ({ onDirectionChange }: OwnProps) => {
  return (
    <ReactNipple
      className="joystick"
      options={{
        mode: 'static',
        position: { top: '70%', left: '50%' },
        color: 'gray',
      }}
      style={{
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
      }}
      onMove={(_: any, data: { direction?: { angle: Direction } }) => {
        if (data.direction) {
          onDirectionChange(data.direction.angle);
        }
      }}
    />
    // <div className="d-pad">
    //   <div />
    //   <button
    //     className="button border"
    //     onTouchStart={() => onDirectionChange(Direction.UP)}
    //   >
    //     <FaArrowUp />
    //   </button>
    //   <div />
    //   <button
    //     className="button border"
    //     onTouchStart={() => onDirectionChange(Direction.LEFT)}
    //   >
    //     <FaArrowLeft />
    //   </button>
    //   <div />
    //   <button
    //     className="button border"
    //     onTouchStart={() => onDirectionChange(Direction.RIGHT)}
    //   >
    //     <FaArrowRight />
    //   </button>
    //   <div />
    //   <button
    //     className="button border"
    //     onTouchStart={() => onDirectionChange(Direction.DOWN)}
    //   >
    //     <FaArrowDown />
    //   </button>
    //   <div />
    // </div>
  );
};

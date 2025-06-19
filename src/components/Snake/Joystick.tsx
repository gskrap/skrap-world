import React from 'react';

import ReactNipple from 'react-nipple';

import { Direction } from './types';

import './Joystick.css';

interface OwnProps {
  onDirectionChange: (direction: Direction) => void;
}

export const Joystick = ({ onDirectionChange }: OwnProps) => {
  return (
    <ReactNipple
      options={{
        mode: 'static',
        position: { top: '80%', left: '50%' },
        color: 'gray',
      }}
      style={{
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
      }}
      className="joystick"
      onMove={(_, data) => {
        if (data.direction) {
          onDirectionChange(data.direction.angle as Direction);
        }
      }}
    />
  );
};

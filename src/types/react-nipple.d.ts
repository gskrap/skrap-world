declare module 'react-nipple' {
  import * as React from 'react';

  interface NippleOptions {
    zone?: HTMLElement;
    color?: string;
    size?: number;
    threshold?: number;
    fadeTime?: number;
    multitouch?: boolean;
    maxNumberOfNipples?: number;
    dataOnly?: boolean;
    position?: { top: string; left: string };
    mode?: 'static' | 'dynamic' | 'semi';
    restJoystick?: boolean;
    restOpacity?: number;
  }

  interface NippleData {
    direction?: {
      angle: 'up' | 'down' | 'left' | 'right';
      x: number;
      y: number;
    };
    distance: number;
    angle: { degree: number; radian: number };
    force: number;
    instance: any;
  }

  interface NippleProps {
    options: NippleOptions;
    className?: string;
    style?: React.CSSProperties;
    onMove?: (evt: Event, data: NippleData) => void;
    onStart?: (evt: Event, data: NippleData) => void;
    onEnd?: (evt: Event, data: NippleData) => void;
    onDir?: (evt: Event, data: NippleData) => void;
    onPlain?: (evt: Event, data: NippleData) => void;
    onShown?: (evt: Event, data: NippleData) => void;
    onHidden?: (evt: Event, data: NippleData) => void;
    onPressure?: (evt: Event, data: NippleData) => void;
  }

  const Nipple: React.FC<NippleProps>;

  export default Nipple;
}

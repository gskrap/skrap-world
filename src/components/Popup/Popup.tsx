import React, { ReactNode } from 'react';

import './Popup.css';

interface OwnProps {
  isOpen: boolean;
  onOpenChange: (val: boolean) => void;
  title?: string;
  children?: ReactNode;
}

export const Popup = ({
  isOpen,
  onOpenChange,
  title,
  children,
}: OwnProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(128, 128, 128, 0.6)',
        pointerEvents: isOpen ? 'auto' : 'none',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 1s ease',
      }}
    >
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          className="popup border"
        >
          <div className="top-bar">
            <p>{title}</p>
          </div>
          {children}
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <div
              onClick={() => onOpenChange(false)}
              className="btn border"
            >
              ok
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

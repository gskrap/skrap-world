import React, { useEffect, useState } from 'react';

import { Face } from '../../components';
import { Popup } from '../../components';

export const AboutMe = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPopupOpen(true);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Popup
        isOpen={isPopupOpen}
        onOpenChange={setIsPopupOpen}
        title="George Skrapits"
      >
        <div>
          Senior Software Engineer
          <br />
          <a
            href="https://www.attentive.com"
            target="_blank"
            rel="noreferrer"
          >
            attentive.com
          </a>
        </div>
      </Popup>
      <Face />
    </div>
  );
};

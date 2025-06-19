import React from 'react';

import { IconType } from 'react-icons';
import { FaEnvelopesBulk, FaGithub, FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';

const GSKRAP = 'gskrap';

const LinkSection = ({
  title,
  description,
  linkUrl,
  Icon,
}: {
  title: string,
  description: string,
  linkUrl: string,
  Icon: IconType,
}) => {
  return (
    <section style={{ display: 'flex', marginBottom: '24px' }}>
      <div style={{ minWidth: '30px', marginRight: '12px' }}>
        <Icon size={30} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={`https://${linkUrl}`} target="_blank" rel="noreferrer">
          <strong>{linkUrl}</strong>
        </a>
      </div>
    </section>
  );
};

export const LinksPage = () => {
  return (
    <div style={{ lineHeight: 1.5 }}>
      <LinkSection
        title="Attentive"
        description="Send messages your customers will love"
        linkUrl="attentive.com"
        Icon={FaEnvelopesBulk}
      />
      <LinkSection
        title="Github"
        description="Code lives here"
        linkUrl={`github.com/${GSKRAP}`}
        Icon={FaGithub}
      />
      <LinkSection
        title="Instagram"
        description="Animals, plants, etc."
        linkUrl={`instagram.com/${GSKRAP}`}
        Icon={FaSquareInstagram}
      />
      <LinkSection
        title="LinkedIn"
        description="For a professional connection"
        linkUrl={`linkedin.com/in/${GSKRAP}`}
        Icon={FaLinkedin}
      />
    </div>
  );
};

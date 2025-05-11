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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '60px',
          marginRight: '16px',
        }}
      >
        <Icon size={60} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={`https://${linkUrl}`} target="_blank" rel="noreferrer">{linkUrl}</a>
      </div>
    </section>
  );
}

export const LinksPage = () => {
  return (
    <div style={{ lineHeight: 1.5 }}>
      <LinkSection
        title="Do you sell something online?"
        description="Use Attentive to send messages your customers will love, across SMS, RCS, and Email"
        linkUrl="attentive.com"
        Icon={FaEnvelopesBulk}
      />
      <LinkSection
        title="Wanna see this site's source code?"
        description="Find it (and no other repos because they're private) on GitHub"
        linkUrl={`github.com/${GSKRAP}`}
        Icon={FaGithub}
      />
      <LinkSection
        title="Are you looking for me?"
        description="This is my Instagram"
        linkUrl={`instagram.com/${GSKRAP}`}
        Icon={FaSquareInstagram}
      />
      <LinkSection
        title="Are you very professional?"
        description="Then so am I"
        linkUrl={`linkedin.com/in/${GSKRAP}`}
        Icon={FaLinkedin}
      />
    </div>
  );
}

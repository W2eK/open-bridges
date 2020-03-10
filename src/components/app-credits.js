import React from 'react';

import classNames from '../styles/app-credits.module.css';

const AppCredits = props => {
  const { credits } = props;
  const links = credits.map(({ type, name, site }) => {
    return (
      <span key={type}>
        {type}:{' '}
        <a href={site} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </span>
    );
  });
  return (
    <div className={classNames.appCredits}>
      <p>{links}</p>
    </div>
  );
};

export default AppCredits;

import React from 'react'

import withMode from '../hooks/with-mode';

import classNames from '../styles/info-label.module.css';


const InfoLabel = props => {
  const { label: { name }, style, transitionable } = props;
  const labels = name.split(' ').map((string, i) => (
    <span key={i} className={transitionable} style={style}>{string}<br/></span>
  ))
  return (
    <div className={classNames.infoLabel}>
      {labels}
    </div>
  );
}

export default withMode(InfoLabel);
import React from 'react'

import withMode from '../hooks/with-mode';

import classNames from '../styles/info-label.module.css';


const InfoLabel = props => {
  const { label: { name }, style, clickable, transitionable, onClick } = props;
  console.log(transitionable)
  const className = [
    transitionable ? 'transitionable' : '',
    clickable ? 'clickable' : ''
  ].join(' ')
  const labels = name.split(' ').map((string, i) => (
    <span onClick={clickable ? onClick : null} key={i} className={className} style={style}>{string}<br/></span>
  ))
  return (
    <div className={classNames.infoLabel}>
      {labels}
    </div>
  );
}

export default withMode(InfoLabel);
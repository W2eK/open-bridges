import React from 'react';

import withMode from '../hooks/with-mode';
import classNames from '../styles/info-river.module.css';

const InfoRiver = props => {
  const { label: {name}, style, transitionable, clickable, waves, onClick } = props;
  const className = [
    classNames.infoRiver,
    transitionable ? 'transitionable' : '',
    clickable ? 'clickable' : '',
    waves ? classNames.infoRiver__waves : ''
  ].join(' ');
  return <div className={className} style={style}>
    <span>〜〜〜〜〜</span>
    <span onClick={clickable ? onClick : null}>{name}</span>
    <span>〜〜〜〜〜</span>
  </div>
}

export default withMode(InfoRiver);
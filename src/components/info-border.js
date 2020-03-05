import React from 'react'

import withMode from '../hooks/with-mode';
import classNames from '../styles/info-border.module.css';

const InfoBorder = props => {
  const { style, transitionable } = props;
  const className = [
    classNames.infoBorder,
    transitionable ? 'transitionable' : ''
  ].join(' ')
  return (
    <div className={classNames} style={style}/>
  )
};

export default withMode(InfoBorder);
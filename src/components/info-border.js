import React from 'react'

import withMode from '../hooks/with-mode';
import classNames from '../styles/info-border.module.css';

const InfoBorder = props => {
  const { style, transitionable } = props;
  return (
    <div className={classNames.infoBorder + ' ' + transitionable} style={style}/>
  )
};

export default withMode(InfoBorder);
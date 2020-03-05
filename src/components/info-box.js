import React, { useContext } from 'react';
import classNames from '../styles/info-box.module.css';

import withMode from '../hooks/with-mode';

const InfoBox = props => {
  const { children, style, align, transitionable } = props;
  const className = [
    classNames.infoBox,
    classNames['infoBox__' + align],
    transitionable ? 'transitionable' : ''
  ].join(' ')
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default withMode(InfoBox);
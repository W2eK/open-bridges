import React from 'react'
import classNames from '../styles/info-area.module.css';

import withMode from '../hooks/with-mode';

const InfoArea = props => {
  const { style, transitionable = '', height } = props;
  const className = [
    classNames.infoArea,
    height ? classNames.infoArea__height : '',
    transitionable
  ].join(' ')
  return <div className={className} style={style}/>
}

export default withMode(InfoArea);
import React from 'react'
import classNames from '../styles/info-area.module.css';

import withMode from '../hooks/with-mode';

const InfoArea = props => {
  const { style, transitionable, height, align='left' } = props;
  const className = [
    classNames.infoArea,
    height ? classNames.infoArea__height : '',
    classNames['infoArea__' + align],
    transitionable ? 'transitionable' : ''
  ].join(' ')
  return <div className={className} style={style}>
    <div/>
  </div>
}

export default withMode(InfoArea);
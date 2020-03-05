import React from 'react';
import withMode from '../hooks/with-mode';
import classNames from '../styles/info-icon.module.css';

const InfoIcon = props => {
  const { label: { id, label }, style, clickable, transitionable, onClick } = props;
  const className = [
    transitionable ? 'transitionable' : '',
    clickable ? 'clickable' : ''
  ].join(' ')
  return (
    <div className={classNames.infoIcon}>
      <img onClick={clickable ? onClick : null} className={className} src={`../regions/${id}.svg`} alt={label} style={style}/>
    </div>
  );
};

export default withMode(InfoIcon);
import React from 'react';
import withMode from '../hooks/with-mode';
import classNames from '../styles/info-icon.module.css';

const InfoIcon = props => {
  const { label: { id, label }, style, transitionable } = props;
  return (
    <div className={classNames.infoIcon}>
      <img className={transitionable} src={`../regions/${id}.svg`} alt={label} style={style}/>
    </div>
  );
};

export default withMode(InfoIcon);
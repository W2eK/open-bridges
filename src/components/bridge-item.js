import React from 'react';
import classNames from '../styles/bridge-item.module.css';

const BridgeItem = props => {
  const { name, moveable, schedule } = props;
  return (
    <li className={classNames.bridgeItem}>
      <h4>{name}</h4>
      <div style={{width: '100%', height: '1px', backgroundColor: 'black'}}></div>
      <div>{moveable ? schedule.join('\t') : 'не разводится'}</div>
    </li>
  );
};

export default BridgeItem;

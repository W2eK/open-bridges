import React from 'react';
import { parseTime, DURATION } from '../utils/time-parser';
import BridgeProgress from './bridge-progress';
import classNames from '../styles/bridge-item.module.css';

const BridgeItem = props => {
  const { name, moveable, schedule } = props;
  const parsed = [0, ...schedule.map(parseTime),DURATION];
  const segments = parsed.slice(1)
    .map((n, i) => n - parsed[i])
  
  return (
    <li className={classNames.bridgeItem}>
      <h4>{name}</h4>
      <BridgeProgress segments={segments} />
      <div>{moveable ? schedule.map((t, i) => i % 2 === 0 ? t + ' ↑\t'  : '\t↓ ' + t).join(' ') : 'не разводится'}</div>
    </li>
  );
};

export default BridgeItem;

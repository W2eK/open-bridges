import React, { useContext } from 'react';
import { parseTime, DURATION, scaler } from '../utils/time-parser';

import TimeContext from '../hooks/time-context';
import BridgeProgress from './bridge-progress';
import BridgeTime from './bridge-time';
import classNames from '../styles/bridge-item.module.css';


const BridgeItem = props => {
  const { name, moveable, schedule, description } = props;
  const time = useContext(TimeContext);
  const parsed = [0, ...schedule.map(parseTime), DURATION];
  const segments = parsed.slice(1).map((n, i) => n - parsed[i]);
  const current = Math.max(parsed.findIndex(x => x > parseTime(time)) - 1, 0);
  // console.log(current, parseTime(time))
  return (
    <li className={classNames.bridgeItem}>
      <h4 className={current % 2 ? classNames.bridgeItem__inactive : null}>
        {name}
      </h4>
      <BridgeProgress
        segments={segments}
        current={current}
        time={scaler(parseTime(time) - 1)}
      />
      <BridgeTime
        segments={segments}
        schedule={schedule}
        moveable={moveable}
        current={current}
        description={description}
      />
    </li>
  );
};

export default BridgeItem;

import React, { useContext } from 'react';
import { parseTime, scaler } from '../utils/time-parser';
import TimeContext from '../hooks/time-context';
import classNames from '../styles/main-time.module.css';

const MainTime = () => {
  const { time } = useContext(TimeContext);
  const scaled = scaler(parseTime(time));
  const right = `calc((100% - var(--layout-padding) * 2) * ${1 - scaled})`;
  return (
    <div className={classNames.mainTime__wrapper + ' constraint'}>
      <div className={classNames.mainTime}>
        <div style={{ right }}></div>
      </div>
    </div>
  );
};

export default MainTime;
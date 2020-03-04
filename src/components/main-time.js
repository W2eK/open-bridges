import React, { useContext } from 'react';
import { parseTime, scaler } from '../utils/time-parser';
import TimeContext from '../hooks/time-context';
import classNames from '../styles/main-time.module.css';

const MainTime = () => {
  const time = useContext(TimeContext);
  const width = `calc(${scaler(parseTime(time)) * 100}% - var(--layout-padding))`;
  return (
    <div className={classNames.mainTime__wrapper + ' wrapper'}>
      <div className={classNames.mainTime}>
        <div></div>
        <div style={{ width }}></div>
      </div>
    </div>
  );
};

export default MainTime;

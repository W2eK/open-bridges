import React from 'react';
import { parseTime, scaler } from '../utils/time-parser';
import classNames from '../styles/main-time.module.css';

const MainTime = props => {
  const { time } = props;
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

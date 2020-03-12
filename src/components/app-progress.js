import React, { useContext } from 'react';
import { parseTime, scaler } from '../utils/time-parser';
import TimeContext from '../hooks/time-context';
import AppSlider from './app-slider.js';
import classNames from '../styles/app-progress.module.css';

const AppProgress = () => {
  const { time, now, setTime } = useContext(TimeContext);
  const scaled = scaler(parseTime(now));
  return (
    <div className="constraint padding">
      <div className={classNames.appProgress}>
        <div className={classNames.appProgress__side}>
          <div style={{right: scaled * -50 + '%'}}/>
        </div>
        <div className={classNames.appProgress__content}>
          <div style={{flex: Math.max(Math.min(scaled, 1) ,0)}}/>
          <div style={{flex: Math.max(Math.min(1 - scaled, 1) ,0)}}>
            <AppSlider {...{ time, now, setTime }}/>
          </div>
        </div>
        <div className={classNames.appProgress__side}>
          <div style={{left: (scaled - 1) * 50 + '%', transform: 'translateX(-100%)'}}/>
        </div>
      </div>
    </div>
  );
};

export default AppProgress;

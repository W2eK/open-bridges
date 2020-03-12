import React, { useContext } from 'react';
import { FROM, TO, stringifyTime, parseTime, scaler } from '../utils/time-parser';
import TimeContext from '../hooks/time-context';
import classNames from '../styles/app-slider.module.css';

if(typeof window === 'undefined') var window = {addGlobalVariables: () => {}}

const AppSlider = () => {
  const { time } = useContext(TimeContext);
  const scaled = scaler(parseTime(time));
  window.addGlobalVariables({ FROM, TO, stringifyTime, parseTime, scaler, scaled });
  /* <input type="range" min={0} max={TO - FROM} value={parseTime(time)} onChange={handleChange} /> */
  return (
    <div className="constraint padding">
      <div className={classNames.appSlider}>
        <div className={classNames.appSlider__side}>
          <div style={{right: scaled * -50 + '%'}}/>
        </div>
        <div className={classNames.appSlider__content}>
          <div style={{flex: Math.max(Math.min(scaled, 1) ,0)}}/>
          <div style={{flex: Math.max(Math.min(1 - scaled, 1) ,0)}}/>
        </div>
        <div className={classNames.appSlider__side}>
          <div style={{left: (scaled - 1) * 50 + '%', transform: 'translateX(-100%)'}}/>
        </div>
      </div>
    </div>
  );
};

export default AppSlider;

import React from 'react';
import { Range } from 'react-range';
import { FROM, TO, stringifyTime, parseTime, scaler } from '../utils/time-parser';
import classNames from '../styles/app-slider.module.css';

export const SliderTrack = ({ children, props }) => {
  return (
    <div className={classNames.appSlider__track} {...props}>
      {children}
    </div>
  );
};

export const SliderFab = props => {
  return (
    <div className={classNames.appSlider__fab} onMouseDown={console.log}>
      <i className="material-icons-outlined md-light md-18">keyboard_arrow_left</i>
      <i className="material-icons-outlined md-light md-18">alarm</i>
      <i className="material-icons-outlined md-light md-18">keyboard_arrow_right</i>
    </div>
  );
};

const AppSlider = props => {
  const { time, now, setTime } = props;
  return (
    <Range
      step={1}
      min={parseTime(now)}
      max={TO - FROM}
      values={[parseTime(time)]}
      onChange={x => {
        console.log(x[0])
        setTime(stringifyTime(x[0]))
      }}
      renderTrack={SliderTrack}
      renderThumb={SliderFab}
    />
  )
}

export default AppSlider;
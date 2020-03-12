import React from 'react';
import Slider from '../hooks/slider-wrapper';
import { FROM, TO, stringifyTime, parseTime, scaler } from '../utils/time-parser';
import classNames from '../styles/app-slider.module.css';

export const SliderTrack = ({ children, props }) => {
  return (
    <div className={classNames.appSlider__track} {...props}>
      {children}
    </div>
  );
};
// <i className="material-icons-outlined md-light md-18">keyboard_arrow_left</i>
// <i className="material-icons-outlined md-light md-18">alarm</i>
// <i className="material-icons-outlined md-light md-18">keyboard_arrow_right</i>
export const SliderFab = props => {
  return (
    <div className={classNames.appSlider__fab}>
    </div>
  );
};

const AppSlider = props => {
  const { time, now, setTime } = props;
  return (
    <Slider
      step={1}
      min={parseTime(now)}
      max={TO - FROM}
      value={parseTime(time)}
      // onClick={() => console.log('fab clicked')}
      onChange={x => {
        setTime(stringifyTime(x))
      }}
      renderTrack={SliderTrack}
      renderThumb={SliderFab}
    />
  )
}

export default AppSlider;
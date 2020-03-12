import React, { useState, useRef } from 'react';
import { Range } from 'react-range';

const WrappedSlider = props => {
  const {
    onChange: originalOnChange = () => {},
    onFinalChange: originalOnFinalChange = () => {},
    onClick: originalOnClick = () => {},
    value, min, max, ...other } = props;

  const [dragged, setDragged] = useState(false);
  const [touched, setTouched] = useState(0);
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  const withRef = handler => event =>
    ref.current === event.target.parentNode.parentNode && handler(event);
  
  const onMouseDown = event => {
    // console.log('mousedown', dragged, offset)
    // setDragged(true);
  }
  const onMouseUp = event => {
    // console.log('mouseup', dragged, offset)
    // setDragged(false);
    // setOffset(0);
  }
  const onClick = event => {
    // console.log('click')
    console.log('click', dragged, offset, touched)
    originalOnClick(event);
  }
  const onChange = ([ x ]) => {
    setDragged(state => {
      if(state) {
        console.log('change', dragged, offset, touched)
        // const value = x + offset;
        const value = Math.max(Math.min(x + offset, max), min)
        // console.log(value, x, offset, max, min)
        if(value - max === offset) setOffset(x => x + 1)
        if(value - min === offset) setOffset(x => x - 1)
        originalOnChange(value)
        // setTouched(x => x + 1);
        // setOffset(Math.max(value - max + 1, offset))
        return true;
      } else {
        console.log('offset', dragged, offset, touched)
        setOffset(value - x);
        return true;
      };
    });
  }
  const onFinalChange = () => {
    console.log('final', dragged, offset, touched)
    setDragged(false);
    setOffset(0);
    setTouched(0);
    originalOnFinalChange();
  }
  return (
    <div
      ref={ref}
      onMouseUp={withRef(onMouseUp)}
      onMouseDown={withRef(onMouseDown)}
      onClick={withRef(onClick)}
    >
      <Range {...other} onFinalChange={onFinalChange} onChange={onChange} min={min} max={max} values={[value]}/>
    </div>
  );
};

export default WrappedSlider;

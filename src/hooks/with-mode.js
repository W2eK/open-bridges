import React, { useContext } from 'react';

import ModeContext from './mode-context';

const toKebabCase = string =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();


const gaps = [3, 2, 5];
const parseValue = str => {
  if (typeof str !== 'string') return str;
  return (
    str
      .split(',')
      .map(x => parseFloat(x))
      .map((x, i) => x * gaps[i])
      .reduce((a, b) => a + b) + 'em'
  );
};

const withMode = Wrapped => props => {
  const { mode, setMode } = useContext(ModeContext);
  const { style, top, right, bottom, left, align = '', ...otherProps } = props;
  const computedStyle = Object.entries({ top, right, bottom, left }).reduce(
    (style, [key, value]) => {
      if (value) style[key] = 0;
      return style;
    },
    {}
  );
  const transitionProperty = [];
  for (const key in style) {
    const transitionable = Array.isArray(style[key])
    const value = transitionable ? style[key][mode] : style[key];
    computedStyle[key] = /^(-*[0-9]+,*)+$/.test(value) ? parseValue(value) : value
    if(transitionable) transitionProperty.push(toKebabCase(key));
  }
  if(align === 'right') computedStyle.transform = 'translateX(-100%)'
  if(align === 'left') computedStyle.transform = 'translateX(100%)';
  computedStyle.transitionProperty = transitionProperty.join(', ');
  return <Wrapped onClick={setMode} { ...otherProps } align={align} style={computedStyle} transitionable={transitionProperty.length ? 'transitionable' : ''}/>;
};

export default withMode;

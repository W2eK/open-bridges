import React, { useContext } from 'react';

import ModeContext from './mode-context';

const toKebabCase = string =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

// const calcProperty = (a, b = 0, c = 0) => `calc(3em * ${a} + 2em * ${b} + 4em * ${c})`;

const withMode = Wrapped => props => {
  const { mode, setMode } = useContext(ModeContext);
  const { style, top, right, bottom, left, align = '' } = props;
  const computedStyle = Object.entries({ top, right, bottom, left }).reduce(
    (style, [key, value]) => {
      if (value) style[key] = 0;
      return style;
    },
    {}
  );
  const transitionProperty = [];
  for (const key in style) {
    const value = style[key];
    if (Array.isArray(value)) {
      computedStyle[key] = value[mode];
      transitionProperty.push(toKebabCase(key));
    } else {
      computedStyle[key] = value;
    }
  }
  computedStyle.transitionProperty = transitionProperty.join(', ');
  return <Wrapped onClick={setMode} {...props} style={computedStyle} align={align} transitionable={transitionProperty.length ? 'transitionable' : ''}/>;
};

export default withMode;

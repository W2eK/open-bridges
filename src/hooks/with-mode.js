import React, { useContext } from 'react';

import ModeContext from './mode-context';

const toKebabCase = string =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

const withMode = Wrapped => props => {
  const mode = useContext(ModeContext);
  const { style, top, right, bottom, left, align = 'left' } = props;
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
  return <Wrapped {...props} style={computedStyle} align={align} transitionable={transitionProperty.length ? 'transitionable' : ''}/>;
};

export default withMode;

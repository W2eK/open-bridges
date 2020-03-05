import React from 'react';
import classNames from '../styles/main-fixed.module.css';

const MainFixed = ({ children, height }) => {
  return (
    <div className={classNames.mainFixed} style={{ height }}>
      {children}
    </div>
  );
};

export default MainFixed;

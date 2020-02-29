import React from 'react';

import classNames from '../styles/main-switcher.module.css';

const MainSwitcher = props => {
  const { branches, currentBranch } = props;
  const maxSize = Math.max(...branches.map(({ props }) => props.bridges.length));
  const currentSize = branches[currentBranch].props.bridges.length;
  const style = {
    width: `${branches.length * 100}%`,
    marginLeft: `${currentBranch * -100}%`,
    marginTop: `calc(${(1 - currentSize / maxSize) * -100}% + ${(maxSize - currentSize) * 9}px)`
  };
  return (
    <div className={classNames.mainSwitcher} style={style}>
      {branches}
    </div>
  );
};

export default MainSwitcher;

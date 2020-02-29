import React from 'react';

import classNames from '../styles/main-switcher.module.css';

const MainSwitcher = props => {
  const { branches, currentBranch } = props;
  const maxSize = Math.max(...branches.map(({ props }) => props.bridges.length));
  const currentSize = branches[currentBranch].props.bridges.length;
  const style = {
    width: `${branches.length * 100}%`,
    marginLeft: `${currentBranch * -100}%`,
    marginTop: `${(currentSize - maxSize) * (3 + 2)}em`
  };
  return (
    <div className={classNames.mainSwitcher + ' transitionable'} style={style}>
      {branches}
    </div>
  );
};

export default MainSwitcher;

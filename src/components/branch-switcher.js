import React from 'react';

import BranchSelector from './branch-selector';
import BridgeList from './bridge-list';
import classNames from '../styles/branch-switcher.module.css';

const BranchSwitcher = props => {
  const { branches, rivers, setBranch, currentBranch, time } = props;
  const constant = branches.slice(-1)[0];
  const switchable = branches.slice(0, 2);
  const maxSize = Math.max(...switchable.map(({ length }) => length));
  const currentSize = branches[currentBranch].length;
  const switchStyle = {
    transform: `translateX(calc(${currentBranch * -100}% - ${10 *
      currentBranch}vw))`,
    marginTop: `${(currentSize - maxSize) * (3 + 2)}em`
  };
  const constantStyle = {
    marginTop: `${(maxSize - currentSize) * (3 + 2)}em`
  };
  return (
    <div>
      <BranchSelector {...{ rivers, setBranch, currentBranch }} />
      <div className={classNames.branchSwitcher__wrapper + ' wrapper'}>
        <div
          className={classNames.branchSwitcher__constant + ' transitionable'}
          style={constantStyle}
        >
          <BridgeList time={time} bridges={constant} />
        </div>
        <div
          className={classNames.branchSwitcher + ' transitionable'}
          style={switchStyle}
        >
          {switchable.map((branch, i) => (
            <BridgeList key={i} time={time} bridges={branch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchSwitcher;

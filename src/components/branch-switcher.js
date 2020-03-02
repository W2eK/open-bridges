import React from 'react';

import BranchSelector from './branch-selector';
import classNames from '../styles/branch-switcher.module.css';

const BranchSwitcher = props => {
  const { branches, rivers, setBranch, currentBranch } = props;
  const maxSize = Math.max(
    ...branches.map(({ props }) => props.bridges.length)
  );
  const currentSize = branches[currentBranch].props.bridges.length;
  const x = `calc(${currentBranch * -100}% - ${10 * currentBranch}vw)`;
  // const y = `calc(${(currentSize - maxSize) * 3}em - 10vw)`;
  // const y = `${(currentSize - maxSize) * (3 + 2)}em`
  const y = 0;
  const style = {
    transform: `translateX(${x})`,
    marginTop: `${(currentSize - maxSize) * (3 + 2)}em`
    // marginLeft: `calc(${currentBranch * -100}% - ${10 * currentBranch}vw)`,
    // marginTop: `${(currentSize - maxSize) * (3 + 2)}em`
  };
  return (
    <div>
      <BranchSelector {...{ rivers, setBranch, currentBranch }} />
      <div className={classNames.branchSwitcher__wrapper + ' wrapper'}>
        <div
          className={classNames.branchSwitcher + ' transitionable'}
          style={style}
        >
          {branches}
        </div>
      </div>
    </div>
  );
};

export default BranchSwitcher;

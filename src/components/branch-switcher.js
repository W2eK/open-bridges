import React from 'react';

import BranchSelector from './branch-selector';
import classNames from '../styles/branch-switcher.module.css';

const BranchSwitcher = props => {
  const { branches, rivers, setBranch, currentBranch, constant } = props;
  const maxSize = Math.max(
    ...branches.map(({ props }) => props.bridges.length)
  );
  const currentSize = branches[currentBranch].props.bridges.length;
  const style = {
    transform: `translateX(calc(${currentBranch * -100}% - ${10 * currentBranch}vw))`,
    marginTop: `${(currentSize - maxSize) * (3 + 2)}em`
  };
  const className = [
    classNames.branchSwitcher,
    'transitionable',
    currentSize === maxSize ? classNames.branchSwitcher__toMax : ''
  ].join(' ')
  return (
    <div>
      <BranchSelector {...{ rivers, setBranch, currentBranch }} />
      <div className={classNames.branchSwitcher__wrapper + ' wrapper'}>
        {constant}
        <div
          className={className}
          style={style}
        >
          {branches}
        </div>
      </div>
    </div>
  );
};

export default BranchSwitcher;

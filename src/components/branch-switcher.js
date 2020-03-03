import React, { useContext }  from 'react';

import ModeContext from '../hooks/mode-context';

import BranchSelector from './branch-selector';
import BridgeList from './bridge-list';
import classNames from '../styles/branch-switcher.module.css';


const BranchSwitcher = props => {
  const { branches, rivers, setMode, time, labels } = props;
  const mode = useContext(ModeContext);
  const constant = branches.get(0);
  const switchable = [branches.get(1), branches.get(2)];
  const maxSize = Math.max(...switchable.map(({ length }) => length));
  const currentSize = switchable[mode].length;
  const switchStyle = {
    transform: `translateX(calc(${mode * -100}% - ${10 *
      mode}vw))`,
    marginTop: `${(currentSize - maxSize) * (3 + 2)}em`
  };
  const constantStyle = {
    marginTop: `${(maxSize - currentSize) * (3 + 2)}em`
  };
  return (
    <div>
      <BranchSelector {...{ rivers, setMode }} />
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

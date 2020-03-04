import React, { useContext } from 'react';

import ModeContext from '../hooks/mode-context';

import BranchSelector from './branch-selector';
import BridgeList from './bridge-list';
import InfoItem from './info-item';
import classNames from '../styles/branch-switcher.module.css';

const BranchSwitcher = props => {
  const { branches, rivers, setMode, time, labels } = props;
  const mode = useContext(ModeContext);
  const constant = branches.get(0);
  const switchable = [branches.get(1), branches.get(2)];
  const maxSize = Math.max(...switchable.map(({ length }) => length));
  const currentSize = switchable[mode].length;
  const switchStyle = {
    transform: `translateX(calc(${mode * -100}% - ${10 * mode}vw))`,
    marginTop: `${(currentSize - maxSize) * (3 + 2)}em`
  };
  const constantStyle = {
    marginTop: `${(maxSize - currentSize) * (3 + 2)}em`
  };
  const infoboxStyle = {
    left: ['0%', '100%'],
    transform: ['translateX(0)', 'translateX(-100%)']
  }
  return (
    <div>
      <BranchSelector {...{ rivers, setMode }} />
      <div className={classNames.branchSwitcher__wrapper + ' wrapper'}>
        <div
          className={classNames.branchSwitcher__constant + ' transitionable'}
          style={constantStyle}
        >
          <BridgeList time={time} bridges={constant}>
            <InfoItem source={labels.get(11)} label/>
          </BridgeList>
        </div>
        <div
          className={classNames.branchSwitcher + ' transitionable'}
          style={switchStyle}
        >
          {switchable.map((branch, i) => (
            <BridgeList key={i} time={time} bridges={branch} />
          ))}
          <InfoItem source={labels.get(5)} icon/>
          <InfoItem source={labels.get(6)} label/>
          <InfoItem source={labels.get(6)} icon/>
        </div>
      </div>
    </div>
  );
};

export default BranchSwitcher;

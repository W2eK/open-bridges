import React, { useContext } from 'react';

import ModeContext from '../hooks/mode-context';

import BridgeList from './bridge-list';
import InfoItem from './info-item';
import classNames from '../styles/branch-switcher.module.css';

const BranchSwitcher = props => {
  const { branches } = props;
  const { mode } = useContext(ModeContext);
  const constant = branches.get(0);
  const switchable = [branches.get(1), branches.get(2)];
  return (
    <div className={classNames.branchSwitcher + (mode ? ' ' + classNames.switched : '') }>
      <BridgeList bridges={constant}>
        <InfoItem id="top-right" area />
        <InfoItem id="top-left" area />
        <InfoItem id={13} label />
        <InfoItem id={11} label />
      </BridgeList>
      <div className={classNames.branchSwitcher__wrapper}>
        <div className={classNames.branchSwitcher__carousel + ' transitionable'}>
          {switchable.map((branch, i) => (
            <BridgeList key={i} bridges={branch} invisible={i !== mode} />
          ))}
        </div>
      </div>
      <InfoItem id="bottom-left" area />
    </div>
  );
};

export default BranchSwitcher;

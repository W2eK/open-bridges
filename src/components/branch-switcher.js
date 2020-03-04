import React, { useContext } from 'react';

import ModeContext from '../hooks/mode-context';

import BranchSelector from './branch-selector';
import BridgeList from './bridge-list';
import InfoItem from './info-item';
import classNames from '../styles/branch-switcher.module.css';

const BranchSwitcher = props => {
  const { branches, rivers, time } = props;
  const { mode } = useContext(ModeContext);
  const constant = branches.get(0);
  const switchable = [branches.get(1), branches.get(2)];
  const maxSize = Math.max(...switchable.map(({ length }) => length));
  const currentSize = switchable[mode].length;
  // translateX(calc(${mode * -100}% - ${10 * mode}vw))
  // `${(currentSize - maxSize) * (3 + 2)}em`
  const marginLeft = `calc(${-100 * mode}% - ${10 * mode}vw)`;
  const marginTop = `${(currentSize - maxSize) * (3 + 2)}em`;
  const constantStyle = {
    marginTop: `${(maxSize - currentSize) * (3 + 2) + 2}em`
  };
  return (
    <div>
      <BranchSelector rivers={rivers} />
      <div className={'wrapper'}>
        <div
          className={classNames.branchSwitcher__constant + ' transitionable'}
          style={constantStyle}
        >
          <BridgeList time={time} bridges={constant}>
            <InfoItem id="top-right" border />
            <InfoItem id="top-left" border />
            <InfoItem id={13} label />
            <InfoItem id={11} label />
          </BridgeList>
        </div>
        <div className={classNames.branchSwitcher__wrapper + ' transitionable'} style={{marginTop}}>
          <div className={classNames.branchSwitcher + ' transitionable'} style={{marginLeft}}>
            {switchable.map((branch, i) => (
              <BridgeList key={i} time={time} bridges={branch} />
            ))}
          </div>
        </div>
        {/* <div
          className={classNames.branchSwitcher + ' transitionable'}
          style={switchStyle}
        >
          {switchable.map((branch, i) => (
            <BridgeList key={i} time={time} bridges={branch} />
          ))} */}
        {/* <InfoItem id={5} icon /> */}
        {/* <InfoItem id={6} label /> */}
        {/* <InfoItem id={6} icon /> */}
        {/* <InfoItem id="vo-right" border /> */}
        {/* <InfoItem id="vo-left" border /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default BranchSwitcher;

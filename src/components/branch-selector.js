import React from 'react';

import classNames from '../styles/branch-selector.module.css';

const BranchSelector = props => {
  const { branches, currentBranch, setBranch } = props;
  const rederInputs = ({ name }, i) => (
    <li key={name}>
      <input
        id={name}
        value={name}
        type="radio"
        name="branch-selector"
        role="tab"
        onChange={() => setBranch(i)}
        checked={i === currentBranch}
      />
      <label htmlFor={name} className={'transitionable'}>
        {name}
      </label>
    </li>
  );
  const inputs = branches.map(rederInputs);
  const spanWidth = 100 / branches.length;
  return (
    <ul className={classNames.branchSelector}>
      {inputs}
      <span
        className={classNames.branchSelector__outline + ' transitionable'}
        style={{
          width: `${spanWidth}%`,
          left: `${currentBranch * spanWidth}%`
        }}
      />
    </ul>
  );
};

export default BranchSelector;

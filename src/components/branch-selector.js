import React, { useContext } from 'react';

import ModeContext from '../hooks/mode-context';
import LabelContext from '../hooks/label-context';
import classNames from '../styles/branch-selector.module.css';

const BranchSelector = props => {
  const { rivers: riverIds, setMode } = props;
  const mode = useContext(ModeContext);
  const labels = useContext(LabelContext);
  const rivers = riverIds.map(id => labels.get(id));
  const rederInputs = ({ name }, i) => (
    <li key={name}>
      <input
        id={name}
        value={name}
        type="radio"
        name="branch-selector"
        role="tab"
        onChange={() => setMode(i)}
        checked={i === mode}
      />
      <label htmlFor={name} className={'transitionable'}>
        {name}
      </label>
    </li>
  );
  const inputs = rivers.map(rederInputs);
  const spanWidth = 100 / rivers.length;
  return (
    <div className={classNames.branchSelector__wrapper + ' wrapper'}>
      <ul className={classNames.branchSelector}>
        {inputs}
        <span
          className={classNames.branchSelector__outline + ' transitionable'}
          style={{
            width: `${spanWidth}%`,
            left: `${mode * spanWidth}%`
          }}
        />
      </ul>
    </div>
  );
};

export default BranchSelector;

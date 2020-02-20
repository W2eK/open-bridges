import React from 'react';

import styles from '../styles/branch-selector.module.css';

console.log(styles);

const BranchSelector = props => {
  const {branches, branch, setBranch } = props;
  const rederInputs = (name, i) => (
    <li key={name}>
      <input
        id={name}
        value={name}
        type="radio"
        name="branch-selector"
        role="tab"
        onChange={() => setBranch(i)}
        checked={i === branch}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
  const inputs = branches.map(rederInputs)
  const spanWidth = 100 / branches.length;
  return (
    <ul className={styles.branchSelector}>
      {inputs}
      <span
        className={styles.branchSelector__outline}
        style={{
          width: `${spanWidth}%`,
          left: `${branch * spanWidth}%`
        }}
      />
    </ul>
  )
}

export default BranchSelector;
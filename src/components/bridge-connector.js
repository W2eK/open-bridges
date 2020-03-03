import React from 'react';
import classNames from '../styles/bridge-connector.module.css';

const BridgeConnector = props => {
  const { condition = () => true } = props;
  const getHeight = condition => i => (condition(i) ? '0' : '100%');
  const connections = [0, 1]
    .map(getHeight(condition))
    .map((height, i) => (
      <div key={i} className="transitionable" style={{ height }} />
    ));
  return (
    <div className={classNames.bridgeConnector}>
      {connections}
      {/* {
        names
        ? <span className="transitionable" style={{left: currentBranch ? '0' : '100%'}}>{names[1 - currentBranch]}</span>
        : null
      } */}
    </div>
  );
};

export default BridgeConnector;

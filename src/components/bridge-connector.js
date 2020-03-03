import React from 'react';
import classNames from '../styles/bridge-connector.module.css';

const BridgeConnector = props => {
  const {
    alignItems = 'flex-end',
    height = '2em',
    getHeight = () => '100%'
  } = props;
  const connections = [0, 1].map(getHeight).map((height, i) => <div key={i} className="transitionable" style={{height}}/>)
  return (
    <div className={classNames.bridgeConnector} style={{ alignItems, height }}>
      {connections}
    </div>
  );
};

export default BridgeConnector;

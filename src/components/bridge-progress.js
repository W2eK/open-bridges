import React from 'react'
import classNames from '../styles/bridge-progress.module.css';

console.log(classNames)
const BridgeProgress = props => {
  const { segments } = props;
  return (
    <div className={classNames.bridgeProgress}>
      {
        segments.map((segment, i) => (<div key={i} style={{flex: segment}}/>))
      }
    </div>
  )
}

export default BridgeProgress;
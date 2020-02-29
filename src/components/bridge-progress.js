import React from 'react'
import classNames from '../styles/bridge-progress.module.css';

const BridgeProgress = props => {
  const { segments, current, time } = props;
  return (
    <div className={classNames.bridgeProgress}>
      {
        segments.map((segment, i) => (<div key={i} className={classNames.bridgeProgress__segments} style={{flex: segment}}/>))
      }
      <div className={classNames.bridgeProgress__dot} style={{left: (time * 100) + '%'}}/>
    </div>
  )
}

export default BridgeProgress;
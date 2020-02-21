import React from 'react'

import classNames from '../styles/bridge-time.module.css';

const BridgeTime = props => {
  const { segments, schedule, moveable } = props;
  const labels = [...schedule.slice(0, 2), '', ...schedule.slice(2)]
  const middle = segments[2];
  const flexValues = segments.length <= 3
  ? segments.map(() => 1).filter((n, i) => i !== 2)
  : segments.map((n, i) => {
    switch (i) {
      case 2:
        return middle * .5
      case 1:
      case 3:
        return n + middle * .75
      default:
        return n
    }
  })
  return (
    <div className={classNames.bridgeTime}>
      {
        !moveable
        ? <span>не разводной</span>
        : flexValues.map((segment, i) => <span key={labels[i]} style={{flex: segment}}>{labels[i]}</span>)
      }
    </div>
  )
}

export default BridgeTime;
import React from 'react'
import classNames from '../styles/bridge-time.module.css';

const BridgeTime = props => {
  const { segments, schedule, moveable } = props;
  console.log(segments)
  const middle = segments[2] / 2;
  const flexes = [segments[0] + segments[1] + middle, segments[3] + segments[4] + middle];
  const spans = !moveable
  ? <span>не разводной</span>
  : schedule.filter((x, i) => i % 2 === 1).map((time, i) =>
    <span key={i} style={{flex: flexes[i]}}>
      <span>{schedule[i * 2]}</span>
      <span>{time}</span>
    </span>
  )
  return <div className={classNames.bridgeTime}>{spans}</div>
}

export default BridgeTime;
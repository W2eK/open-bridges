import React from 'react'
import classNames from '../styles/bridge-time.module.css';

const BridgeTime = props => {
  const { segments, schedule, moveable, current, description } = props;
  const middle = segments[2] / 2;
  const flexes = [segments[0] + segments[1] + middle, segments[3] + segments[4] + middle];
  const labels = schedule.map((time, i) => <span key={i} className={i === current ? classNames.bridgeTime__active : null}>{time}</span>)
  const spans = !moveable
  ? <span>{description}&nbsp;<span className={classNames.bridgeTime__active}>•</span></span>
  : new Array(schedule.length / 2).fill().map((x, i) =>
    <span key={i} style={{flex: flexes[i]}}>
      {labels[i * 2]}
      {labels[i * 2 + 1]}
    </span>
  )
  return <div className={classNames.bridgeTime}>{spans}</div>
}

export default BridgeTime;
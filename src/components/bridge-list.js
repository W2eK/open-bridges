import React from 'react'

import BridgeItem from './bridge-item';

import classNames from '../styles/bridge-list.module.css';

const BridgeList = props => {
  const { bridges, time, children } = props;
  const items = bridges.map(bridge => <BridgeItem key={bridge.id} {...bridge} time={time}/>)
  return (
    <ul className={classNames.bridgeList}>
      {children}
      {items}
    </ul>
  )
}

export default BridgeList;

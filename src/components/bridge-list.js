import React from 'react'

import BridgeListItem from './bridge-item';

import classNames from '../styles/bridge-list.module.css';

const BridgeList = props => {
  const { bridges } = props;
  const items = bridges.map(bridge => <BridgeListItem key={bridge.id} {...bridge}/>)
  return (
    <ul className={classNames.bridgeList}>
      {items}
    </ul>
  )
}

export default BridgeList;

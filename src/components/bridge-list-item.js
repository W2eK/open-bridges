import React from 'react'

const BridgeListItem = props => {
  const { name } = props;
  return (
    <li>
      {name}
    </li>
  )
}

export default BridgeListItem;
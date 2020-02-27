import React, { useState } from 'react';
import useData from '../hooks/use-data';

import BranchSelector from '../components/branch-selector';
import BridgeList from '../components/bridge-list';

const Schedule = () => {
  const data = useData();
  const [branch, setBranch] = useState(0)
  const [time, setTime] = useState('3:00')
  window.addGlobalVariables({branch, setBranch, time, setTime});
  const rivers =  data.reduce((obj, bridge) => {
    const { river } = bridge;
    obj[river] ? obj[river].push(bridge) : obj[river] = [bridge]
    return obj
  }, {})
  return (
    <>
      <BranchSelector branches={['Большая Нева', 'Малая Нева']} branch={branch} setBranch={setBranch}/>
      {
        Object.entries(rivers).map(([river, bridges]) => (
          <BridgeList key={river} bridges={bridges} time={time}/>
        ))
      }
    </>
  )
};

export default Schedule;
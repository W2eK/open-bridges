import React, { useState } from 'react';

import BranchSelector from '../components/branch-selector';
import BridgeList from '../components/bridge-list';

const Schedule = props => {
  const { bridges, rivers } = props;
  const [branch, setBranch] = useState(0)
  const [time, setTime] = useState('3:00')
  window.addGlobalVariables({branch, setBranch, time, setTime});
  return (
    <>
      <BranchSelector branches={['Большая Нева', 'Малая Нева']} branch={branch} setBranch={setBranch}/>
      <BridgeList bridges={bridges} time={time}/>
    </>
  )
};

export default Schedule;
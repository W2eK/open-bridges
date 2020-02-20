import React, { useState } from 'react';

import useData from '../hooks/use-data';

import BranchSelector from '../components/branch-selector';

const Schedule = () => {
  const data = useData();
  const [branch, setBranch] = useState(0)
  window.addGlobalVariables({branch, setBranch})
    console.log('goodbye')
  return (
    <>
      <BranchSelector branches={['Большая Нева', 'Малая Нева']} branch={branch} setBranch={setBranch}/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
};

export default Schedule;

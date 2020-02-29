import React, { useState } from 'react';

import BranchSelector from './branch-selector';
import BridgeList from './bridge-list';
import MainSwitcher from './main-switcher';
import MainBar from './main-bar';

const MainContainer = props => {
  const { bridges, rivers, setLang } = props;
  const [currentBranch, setBranch] = useState(0);
  const [time, setTime] = useState('3:00');
  window.addGlobalVariables({ currentBranch, setBranch, time, setTime });

  const branches = rivers.slice(0, 3).map(({ id }) => {
    const filtred = bridges.filter(({ river }) => river.id === id);
    return <BridgeList key={id} bridges={filtred} time={time} />;
  });

  return (
    <>
      <MainBar setLang={setLang}/>
      <BranchSelector
        branches={rivers.slice(0, 2)}
        currentBranch={currentBranch}
        setBranch={setBranch}
      />
      <MainSwitcher
        branches={branches.slice(0, 2)}
        currentBranch={currentBranch}
      />
      {branches[2]}
    </>
  );
};

export default MainContainer;

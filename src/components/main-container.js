import React, { useState } from 'react';

// import BranchSelector from './branch-selector';
// import MainSwitcher from './main-switcher';
import BranchSwitcher from './branch-switcher';
import BridgeList from './bridge-list';
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
      <MainBar setLang={setLang} />
      <BranchSwitcher
        rivers={rivers.slice(0, 2)}
        branches={branches.slice(0, 2)}
        currentBranch={currentBranch}
        setBranch={setBranch}
      />
      <div className="wrapper" style={{marginBottom: 'var(--layout-margin)'}}>{branches[2]}</div>
    </>
  );
};

export default MainContainer;

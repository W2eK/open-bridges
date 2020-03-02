import React, { useState } from 'react';

import MainBar from './main-bar';
import BranchSwitcher from './branch-switcher';
import BridgeList from './bridge-list';
import MainTime from './main-time';

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
    <div style={{height: '100%', paddingBottom: 'var(--layout-margin)', position: 'relative'}}>
      <MainBar setLang={setLang} />
      <BranchSwitcher
        rivers={rivers.slice(0, 2)}
        branches={branches.slice(0, 2)}
        currentBranch={currentBranch}
        setBranch={setBranch}
      />
      <div className="wrapper">{branches[2]}</div>
      <MainTime time={time}/>
    </div>
  );
};

export default MainContainer;

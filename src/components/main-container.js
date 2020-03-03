import React, { useState } from 'react';

import AppLogo from './app-bar';
import BranchSwitcher from './branch-switcher';
import BridgeList from './bridge-list';
import MainTime from './main-time';
import BridgeConnector from './bridge-connector';

const MainContainer = props => {
  const { branches, labels, setLang } = props;
  const [currentBranch, setBranch] = useState(0);
  const [time, setTime] = useState('3:00');
  window.addGlobalVariables({ currentBranch, setBranch, time, setTime });
  return (
    <div
      style={{
        height: '100%',
        paddingBottom: 'var(--layout-margin)',
        position: 'relative'
      }}
    >
      <AppLogo setLang={setLang} />
      <BranchSwitcher
        rivers={[labels.get(1), labels.get(2)]}
        branches={branches}
        currentBranch={currentBranch}
        setBranch={setBranch}
        time={time}
      />
      <div className="wrapper">
        <BridgeConnector condition={i => i !== currentBranch} />
        <BridgeList time={time} bridges={branches.get(3)} />
        <BridgeConnector condition={i => i} />
        <BridgeList time={time} bridges={branches.get(4)} />
      </div>
      <MainTime time={time} />
    </div>
  );
};

export default MainContainer;

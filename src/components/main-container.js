import React, { useState } from 'react';

import AppLogo from './app-bar';
import BranchSwitcher from './branch-switcher';
import BridgeList from './bridge-list';
import MainTime from './main-time';
import BridgeConnector from './bridge-connector';

const MainContainer = props => {
  const { bridges, labels, setLang } = props;
  const [currentBranch, setBranch] = useState(0);
  const [time, setTime] = useState('3:00');
  window.addGlobalVariables({ currentBranch, setBranch, time, setTime });

  const branches = bridges.reduce((acc, bridge) => {
    const { branch } = bridge;
    acc[branch] ? acc[branch].push(bridge) : (acc[branch] = [bridge]);
    return acc;
  }, []);
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
        rivers={labels.slice(0, 2)}
        branches={branches}
        currentBranch={currentBranch}
        setBranch={setBranch}
        time={time}
      />
      <div className="wrapper">
        <BridgeConnector
          currentBranch={currentBranch}
          height="7em"
          getHeight={i => (i === currentBranch ? '100%' : '0')}
          names={labels.slice(0, 2).map(({ name }) => name)}
        />
      </div>
      <div className="wrapper">
        <BridgeList time={time} bridges={branches[2]} />
      </div>
      <MainTime time={time} />
    </div>
  );
};

export default MainContainer;

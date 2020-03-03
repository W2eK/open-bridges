import React, { useState } from 'react';

import MainBar from './main-bar';
import BranchSwitcher from './branch-switcher';
import BridgeList from './bridge-list';
import MainTime from './main-time';
import BridgeConnector from './bridge-connector';

const MainContainer = props => {
  const { bridges, rivers, setLang } = props;
  const [currentBranch, setBranch] = useState(0);
  const [time, setTime] = useState('3:00');
  window.addGlobalVariables({ currentBranch, setBranch, time, setTime });

  const branches = bridges
    .reduce((acc, bridge) => {
      const { branch } = bridge;
      acc[branch] ? acc[branch].push(bridge) : (acc[branch] = [bridge]);
      return acc;
    }, [])
    .map((branch, i) => {
      return <BridgeList key={i} time={time} bridges={branch} />;
    });
  return (
    <div
      style={{
        height: '100%',
        paddingBottom: 'var(--layout-margin)',
        position: 'relative'
      }}
    >
      <MainBar setLang={setLang} />
      <BranchSwitcher
        rivers={rivers.slice(0, 2)}
        constant={branches[3]}
        branches={branches.slice(0, 2)}
        currentBranch={currentBranch}
        setBranch={setBranch}
      />
      <div className="wrapper">
        <BridgeConnector
          currentBranch={currentBranch}
          height="7em"
          getHeight={i => (i === currentBranch ? '100%' : '0')}
          names={rivers.slice(0, 2).map(({ name }) => name)}
        />
      </div>
      <div className="wrapper">{branches[2]}</div>
      <MainTime time={time} />
    </div>
  );
};

export default MainContainer;

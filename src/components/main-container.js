import React, { useState } from 'react';

import { TimeProvider } from '../hooks/time-context';
import { ModeProvider } from '../hooks/mode-context';

import AppLogo from './app-bar';
import BranchSwitcher from './branch-switcher';
import BridgeList from './bridge-list';
import InfoItem from './info-item';
import MainTime from './main-time';

import classNames from '../styles/main-container.module.css';

const MainContainer = props => {
  const { branches, labels, setLang } = props;
  const [mode, setMode] = useState(0);
  const [time, setTime] = useState('3:00');
  window.addGlobalVariables({ mode, setMode, time, setTime });
  return (
    <TimeProvider value={time}>
      <ModeProvider value={{mode, setMode: () => setMode(i => i ? 0 : 1)}}>
        <div className={classNames.mainContainer}>
          <AppLogo setLang={setLang} />
          <BranchSwitcher
            rivers={[1, 2]}
            branches={branches}
            labels={labels}
          />
          <div className="wrapper" style={{ position: 'relative'}}>
            <div className={classNames.mainContainer__gap}/>
            <BridgeList bridges={branches.get(3)}>
              <InfoItem id={5} icon />
              <InfoItem id={6} label />
              <InfoItem id={6} icon />
              <InfoItem id="vo-right" border />
              <InfoItem id="vo-left" border />
              <InfoItem id={5} label />
              <InfoItem id={7} label />
              <InfoItem id="center-right" border />
            </BridgeList>
            <div className={classNames.mainContainer__gap}/>
            <BridgeList bridges={branches.get(4)}>
              <InfoItem id={8} label />
              <InfoItem id={8} icon />
              <InfoItem id={9} />
              <InfoItem id={10} label />
              <InfoItem id="bottom-left" border />
              <InfoItem id="bottom-right" border />
            </BridgeList>
          </div>
          <MainTime />
        </div>
      </ModeProvider>
    </TimeProvider>
  );
};
export default MainContainer;

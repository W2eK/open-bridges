import React, { useState, useEffect } from 'react';

import { TimeProvider } from '../hooks/time-context';
import { ModeProvider } from '../hooks/mode-context';
import { NOW } from '../utils/time-parser.js';

import AppBar from './app-bar';
import BranchSelector from './branch-selector';
import BranchSwitcher from './branch-switcher';
import BridgeList from './bridge-list';
import InfoItem from './info-item';
import MainTime from './main-time';

import classNames from '../styles/main-container.module.css';

if(typeof window === 'undefined') var window = {addGlobalVariables: () => {}}

const MainContainer = props => {
  const { branches, setLang, credits } = props;
  const [mode, setMode] = useState(0);
  const [now, setNow] = useState('3:00');
  const [time, setTime] = useState(now);
  window.addGlobalVariables({ mode, setMode, time, setTime });
  // const setNow
  useEffect(() => {
    const id = setInterval(() => {
      setNow(NOW())
    }, 60000)
    return () => clearInterval(id);
  })
  return (
    <TimeProvider value={{ time, setTime, now }}>
      <ModeProvider value={{ mode, setMode: () => setMode(i => (i ? 0 : 1)) }}>
        <div className={classNames.mainContainer}>
          <BranchSelector rivers={[1, 2]} />
          <main className="constraint">
            <BranchSwitcher branches={branches} />
            <div className={classNames.mainContainer__gap}>
              <InfoItem id={1} river />
            </div>
            <BridgeList bridges={branches.get(3)}>
              <InfoItem id="top-right" area />
              <InfoItem id="top-left" area />
              <InfoItem id="vasilyevskiy" area />
              <InfoItem id="center-right" area />
              <InfoItem id={5} icon />
              <InfoItem id={6} icon />
              <InfoItem id={7} icon />
              {/* <InfoItem id={8} icon /> */}
              <InfoItem id={6} label />
              <InfoItem id={5} label />
              <InfoItem id={7} label />
              <InfoItem id={13} label />
              <InfoItem id={11} label />
            </BridgeList>
            <div className={classNames.mainContainer__gap}>
              <InfoItem id={4} river />
            </div>
            <BridgeList bridges={branches.get(4)}>
              <InfoItem id="bottom-right" area />
              <InfoItem id={8} label />
              <InfoItem id={9} />
              <InfoItem id={10} label />
            </BridgeList>
            <div
              className={classNames.mainContainer__gap}
              style={{ marginTop: '1em' }}
            >
              <InfoItem id={15} river />
            </div>
          </main>
          <MainTime />
          <AppBar setLang={setLang} credits={credits} />
        </div>
      </ModeProvider>
    </TimeProvider>
  );
};
export default MainContainer;

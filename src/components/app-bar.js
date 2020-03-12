import React from 'react';

import MainFixed from './main-fixed';
import AppProgress from './app-progress';
import AppCredits from './app-credits';
import classNames from '../styles/app-bar.module.css';

const AppBar = props => {
  const { setLang, credits } = props;
  return (
    <MainFixed height="var(--layout-bar)">
      <footer className={classNames.appBar + ' elevation-24'}>
        <AppProgress/>
        <div className={classNames.appBar__buttons}>
          <ul>
            <li>
              <button type="button" disabled>
                <i className="material-icons-outlined md-light" style={{color: 'var(--color-transparent)'}}>search</i>
              </button>
            </li>
            <li>
              <button type="button" disabled>
                <i className="material-icons-outlined md-light" style={{color: 'var(--color-transparent)'}}>location_off</i>
              </button>
            </li>
            <li>
              <button type="button" onClick={setLang}>
                <i className="material-icons-outlined md-light">translate</i>
              </button>
            </li>
          </ul>
        </div>
        <AppCredits credits={credits}/>
      </footer>
    </MainFixed>
  );
};

export default AppBar;

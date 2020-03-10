import React from 'react';

import MainFixed from './main-fixed';
import classNames from '../styles/app-bar.module.css';

const AppBar = props => {
  const { setLang } = props;
  return (
    <MainFixed height="var(--layout-bar)">
      <footer className={classNames.appBar__wrapper + ' elevation-24'}>
        <div className={classNames.appBar}>
          <div className={classNames.appBar__buttons}>
            <button type="button">
              <i className="material-icons-outlined md-light">search</i>
            </button>
            <button type="button" onClick={setLang}>
              <i className="material-icons-outlined md-light">translate</i>
            </button>
            <button type="button" disabled>
              <i className="material-icons-outlined md-light" style={{opacity: .3}}>location_off</i>
            </button>
          </div>
        </div>
      </footer>
    </MainFixed>
  );
};

export default AppBar;

import React from 'react';

import MainFixed from './main-fixed';
import classNames from '../styles/app-bar.module.css';

const AppBar = props => {
  const { setLang } = props;
  return (
    <MainFixed height="var(--layout-bar)">
      <footer className={classNames.appBar__wrapper}>
        <div className={classNames.appBar}>
          <button type="button">
            <i className={'material-icons-outlined md-light'}>search</i>
          </button>
          <button type="button" onClick={setLang}>
            <i className={'material-icons-outlined md-light'}>translate</i>
          </button>
          <button type="button" disabled>
            <i className={'material-icons-outlined md-light md-inactive'}>location_off</i>
          </button>
        </div>
      </footer>
    </MainFixed>
  );
};

export default AppBar;

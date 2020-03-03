import React from 'react';
import AppLogo from './app-logo';
import classNames from '../styles/app-bar.module.css';

const AppBar = props => {
  const { setLang } = props;
  return (
    <div className={classNames.appBar__wrapper + ' wrapper'}>
      <div className={classNames.appBar}>
        <AppLogo />
        <button type="button">
          <i className="material-icons">search</i>
        </button>
        <button type="button" onClick={setLang}>
          <i className="material-icons">translate</i>
        </button>
      </div>
    </div>
  );
};

export default AppBar;

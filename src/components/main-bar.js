import React from 'react';
import MainLogo from './main-logo';
import classNames from '../styles/main-bar.module.css';

const MainBar = props => {
  const { setLang } = props;
  return (
    <div className={classNames.mainBar__wrapper + ' wrapper'}>
      <div className={classNames.mainBar}>
        <MainLogo />
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

export default MainBar;

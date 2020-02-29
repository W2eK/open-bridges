import React from 'react';

import classNames from '../styles/main-bar.module.css';

const MainBar = props => {
  const { setLang } = props;
  return <div className={classNames.mainBar}>
    <h1>
      <span><span>Open</span></span>
      <span><span>bridges</span></span>
    </h1>
    <button type="button">
      <i className="material-icons">search</i>
    </button>
    <button type="button" onClick={setLang}>
      <i className="material-icons">translate</i>
    </button>
  </div>
}

export default MainBar;
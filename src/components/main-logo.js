import React from 'react'

import classNames from '../styles/main-logo.module.css';

const MainLogo = props => {
  return (
    <h1 className={classNames.mainLogo}>
      <span className={classNames.mainLogo__text}>Open</span>
      <span>/</span>
      <span className={classNames.mainLogo__gap}></span>
      <span>\</span>
      <span className={classNames.mainLogo__text}>Bridges</span>
    </h1>
  )
}

export default MainLogo;
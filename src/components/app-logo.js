import React from 'react'

import classNames from '../styles/app-logo.module.css';

const AppLogo = props => {
  return (
    <h1 className={classNames.appLogo}>
      <span className={classNames.appLogo__text}>Open</span>
      <span>/</span>
      <span className={classNames.appLogo__gap}></span>
      <span>\</span>
      <span className={classNames.appLogo__text}>Bridges</span>
    </h1>
  )
}

export default AppLogo;
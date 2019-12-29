import React from 'react'
import { Link } from 'gatsby'
import { header, logo } from './header.module.css'

import Logo from '../../assets/dollar-sign.svg'

export default () => (
  <header className={header}>
    <Link to="/" className={logo}>
      <Logo />
    </Link>
    <nav></nav>
  </header>
)

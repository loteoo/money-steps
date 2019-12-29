import React from 'react'
import { Link } from 'gatsby'
import { header, logo } from './header.module.css'

import ChevronLeft from '../../assets/chevron-left.svg'

export default () => (
  <header className={header}>
    <Link to="/" className={logo}>
      <button type="button">
        <ChevronLeft />
        Back to home
      </button>
    </Link>
    <nav></nav>
  </header>
)

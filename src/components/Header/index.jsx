import React from 'react'
import { Link } from 'gatsby'
import { header } from './header.module.css'

export default () => (
  <header className={header}>
    <Link to="/">Home</Link>
  </header>
)

import React from 'react'
import { Link } from 'gatsby'
import Github from '../../assets/github.svg'

import { footer } from './footer.module.css'

export default () => (
  <footer className={footer}>
    <nav>
      <Link to="/about">About this site</Link>
      <a
        href="https://www.reddit.com/r/personalfinance/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Personnal Finance subreddit
      </a>
      <a
        href="https://github.com/loteoo/money-steps"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github repository
      </a>
    </nav>
  </footer>
)

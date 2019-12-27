import React from 'react'
import Github from '../../assets/github.svg'

import { footer } from './footer.module.css'

export default () => (
  <footer className={footer}>
    <a
      title="Github"
      aria-label="Github"
      href="https://www.reddit.com/r/personalfinance/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Subreddit
    </a>
  </footer>
)

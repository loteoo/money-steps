/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { Link } from 'gatsby'

// Import best-practices css defaults
import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'

// Global styling
import './global.css'

const container = css`
  max-width: 640px;
  margin: 3rem auto;
  padding: 1rem;
  header a {
    margin-right: 1rem;
  }
  footer {
    margin: 3rem 0;
  }
  footer a {
    margin-right: 1rem;
  }
`

export const GlobalState = React.createContext()

export default ({ children }) => {
  const [state, setState] = useState({
    count: 0
  })
  return (
    <GlobalState.Provider value={{ state, setState }}>
      <div css={container}>
        <header>
          <Link to="/">Home</Link>
          <Link to="/example-page">Example page</Link>
          <Link to="/counter">Counter</Link>
        </header>
        <main>{children}</main>
        <footer>
          <a href="https://github.com/loteoo/gatsby-starter" target="_blank" rel="noopener noreferrer">Starter repository</a>
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>
        </footer>
      </div>
    </GlobalState.Provider>
  )
}

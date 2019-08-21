/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

// Import best-practices css defaults
import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'

// Global styling
import './global.css'

import Header from './components/Header'
import Footer from './components/Footer'

const container = css`
  max-width: 764px;
  margin: 3rem auto;
  padding: 1rem;
`

export const GlobalState = React.createContext()

export default ({ children }) => {
  const [state, setState] = useState({
    count: 0
  })
  return (
    <GlobalState.Provider value={{ state, setState }}>
      <div css={container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </GlobalState.Provider>
  )
}

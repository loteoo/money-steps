import React from 'react'
import GlobalState from '../../components/GlobalState'
import SEO from '../../components/SEO'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Global styling
import './global.css'
import './utils.css'

// Root component
export default ({ children }) => {
  return (
    <GlobalState>
      <SEO />
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </GlobalState>
  )
}

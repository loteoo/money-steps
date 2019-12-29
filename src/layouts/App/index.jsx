import React from 'react'
import SEO from '../../components/SEO'
import Footer from '../../components/Footer'

// Global styling
import './global.css'
import './utils.css'

// Root component
export default ({ children }) => {
  return (
    <>
      <SEO />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}

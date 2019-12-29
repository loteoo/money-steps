import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Header from '../components/Header'

export default () => (
  <>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Header />
    <div className="container">
      <h1>404.</h1>
      <p>Page not found.</p>
      <Link to="/">Go back home</Link>
    </div>
  </>
)

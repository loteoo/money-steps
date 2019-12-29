import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

export default () => (
  <>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <div className="container">
      <h1>404.</h1>
      <p>Page not found.</p>
      <Link to="/">Go back home</Link>
    </div>
  </>
)

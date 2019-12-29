import React from 'react'
import Helmet from 'react-helmet'

export default () => (
  <>
    <Helmet>
      <title>About this site</title>
    </Helmet>
    <div className="container">
      <article>
        <h1>About this site</h1>
        <p>
          I found the step-by-step guide from the personal finance subreddit
          very helpful for reviewing my finances. I wanted to make it even
          better by gamifying the entire experience by reproducing it as an
          interactive web page.
        </p>
        <h2>How to contribute</h2>
      </article>
    </div>
  </>
)

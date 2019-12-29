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
          better by gamifying the entire experience and reproducing it as an
          interactive web page.
        </p>
        <p>
          Since this website is a non profit project, I've made the code
          available <a href="/#">open source on github</a>.
        </p>
        <h2>How to contribute</h2>
        <p>
          Following the spirit of open source, if you're feeling adventurous and
          want to try your hand at open source, it would be very appreciated if
          you could{' '}
          <a href="https://github.com/loteoo/money-steps/edit/master/content/steps/step1.md">
            propose file changes
          </a>{' '}
          directly on the project's repository on github.
        </p>
        <p>
          You can also create
          <a href="https://github.com/loteoo/money-steps/issues">issues</a> for
          me to fix.
        </p>
        <p>
          You can also contact me directly on reddit as{' '}
          <a href="https://www.reddit.com/user/lot3oo">/u/lot3oo</a> or by email
          at <a href="mailto:dev@alexlotte.ca">dev@alexlotte.ca</a>
        </p>
      </article>
    </div>
  </>
)

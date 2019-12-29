import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'

export default () => (
  <>
    <Helmet>
      <title>About this site</title>
    </Helmet>
    <Header />
    <div className="container">
      <article>
        <h1>About this site</h1>
        <p>
          I found the step-by-step guide from the personal finance subreddit
          very helpful for reviewing my finances. I wanted to make it even
          better by gamifying the experience and reproducing it as an
          interactive web page.
        </p>
        <p>
          Since this is a community driven project, I've made the code available{' '}
          <a
            href="https://github.com/loteoo/money-steps"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source on github
          </a>{' '}
          so that more contributions come naturally.
        </p>
        <h2>How to contribute</h2>
        <p>
          Following the spirit of open source, if you're feeling adventurous and
          want to try your hand at contributing to this web project, it would be
          very appreciated if you could{' '}
          <a href="https://github.com/loteoo/money-steps/edit/master/content/steps/step1.md">
            propose file changes
          </a>{' '}
          directly on the project's repository on github.
        </p>
        <p>
          You can also create{' '}
          <a href="https://github.com/loteoo/money-steps/issues">issues</a> for
          anything that you would like to talk regarding this site about and I
          will hapilly discuss / take care of them when I have time.
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

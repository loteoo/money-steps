import React from 'react'
import { graphql } from 'gatsby'
import Steps from '../components/Steps'

export default () => {
  return (
    <>
      <section className="hero">
        <h1>Personal Finance Checklist</h1>
        <h2>
          Get you finances in check with sound advice <br /> from the{' '}
          <a
            title="Personal Finance subreddit"
            aria-label="Personal Finance subreddit"
            href="https://www.reddit.com/r/personalfinance/wiki/commontopics"
            target="_blank"
            rel="noopener noreferrer"
          >
            personal finance subreddit
          </a>
          .
        </h2>
      </section>
      <section className="hero-text">
        <h3>How to use: </h3>
        <ol>
          <li>Follow the instructions below</li>
          <li>
            Only mark the steps as done once you've actually done them, or
            considered them non-applicable to your situation.
          </li>
          <li>
            Your progress will be saved in your browser so you can come back
            later.
          </li>
        </ol>
      </section>
      <Steps />
    </>
  )
}

import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Step from '../components/Step'

export default ({ data }) => {
  const [steps, setSteps] = useState(
    data.allMarkdownRemark.nodes.reduce(
      (steps, step, i) => ({ ...steps, [i]: step }),
      {}
    )
  )

  return (
    <>
      <section className="hero">
        <h1>What to do with your money</h1>
        <h2>Sound financial advice you should probably follow.</h2>
      </section>

      <section className="text-container">
        <h2>How does it work:</h2>
        <ol>
          <li>
            Only check a checkbox once you've actually done it, or considered it
            non-applicable.
          </li>
          <li>Your progress will be saved in your browser.</li>
        </ol>
      </section>

      <section className="steps-section">
        <div className="steps">
          {Object.keys(steps).map(i => (
            <Step
              i={parseInt(i)}
              step={steps[i]}
              setStep={step =>
                setSteps({
                  ...steps,
                  [i]: step
                })
              }
            />
          ))}
        </div>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        html
        fileAbsolutePath
      }
    }
  }
`

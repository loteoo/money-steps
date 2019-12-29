import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Step from '../components/Step'

export default ({ data }) => {
  const cache = JSON.parse(window.localStorage.getItem('money-steps'))

  const [steps, setSteps] = useState(
    cache ||
      data.allMarkdownRemark.edges.reduce(
        (steps, edge) => ({ ...steps, [edge.node.id]: edge.node }),
        {}
      )
  )

  useEffect(() => {
    window.localStorage.setItem('money-steps', JSON.stringify(steps))
  }, [steps])

  const ids = Object.keys(steps)

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
          {ids.map((id, i) => {
            return (
              <Step
                key={id}
                step={steps[id]}
                enabled={i === 0 ? true : !!steps[ids[i - 1]].done}
                setStep={step =>
                  setSteps({
                    ...steps,
                    [id]: step
                  })
                }
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            number
          }
          html
        }
      }
    }
  }
`

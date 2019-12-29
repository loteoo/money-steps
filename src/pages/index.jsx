import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Step from '../components/Step'

const getStepsMap = data =>
  data.allMarkdownRemark.edges.reduce(
    (steps, edge, i) => ({
      ...steps,
      expanded: i === 0,
      [edge.node.id]: edge.node
    }),
    {}
  )

const getStepsIds = data =>
  data.allMarkdownRemark.edges.map(edge => edge.node.id)

export default ({ data }) => {
  const cache = JSON.parse(window.localStorage.getItem('money-steps'))

  const [steps, setSteps] = useState(getStepsMap(data))

  const resetSteps = () => setSteps(getStepsMap(data))

  useEffect(() => {
    window.localStorage.setItem('money-steps', JSON.stringify(steps))
  }, [steps])

  const ids = getStepsIds(data)

  return (
    <>
      <section className="hero">
        <h1>What to do with your money</h1>
        <h2>Sound financial advice you should probably follow.</h2>
      </section>

      <section className="hero-text">
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
                  setSteps(steps => ({
                    ...steps,
                    [id]: step
                  }))
                }
                markAsDone={() => {
                  const next = steps[ids[i + 1]]
                  setSteps(steps => ({
                    ...steps,
                    [id]: {
                      ...steps[id],
                      expanded: false,
                      done: true
                    },
                    ...(next && {
                      [next.id]: {
                        ...next,
                        expanded: true
                      }
                    })
                  }))
                }}
              />
            )
          })}
        </div>
      </section>

      <section className="container">
        <button type="text" onClick={resetSteps}>
          Reset
        </button>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___number] }) {
      edges {
        node {
          id
          frontmatter {
            title
            number
            feedback
          }
          html
        }
      }
    }
  }
`

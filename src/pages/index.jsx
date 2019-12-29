import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Step from '../components/Step'
import TrashIcon from '../assets/trash.svg'

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

  const [steps, setSteps] = useState(cache || getStepsMap(data))

  const resetSteps = () => setSteps(getStepsMap(data))

  useEffect(() => {
    window.localStorage.setItem('money-steps', JSON.stringify(steps))
  }, [steps])

  const ids = getStepsIds(data)

  return (
    <>
      <section className="hero">
        <h1>What to do with your money</h1>
        <h2>
          Get you finances in check with sound advice <br /> from the{' '}
          <a
            title="Personal Finance subreddit"
            aria-label="Personal Finance subreddit"
            href="https://www.reddit.com/r/personalfinance/wiki/commontopics"
            target="_blank"
            rel="noopener noreferrer"
          >
            personnal finance subreddit
          </a>
          .
        </h2>
      </section>

      <section className="hero-text">
        <p>
          Only mark the steps as done once you've actually done them, or
          considered them non-applicable to your situation.
        </p>
        <p>
          Your progress will be saved in your browser so you can come back
          later.
        </p>
      </section>

      <section className="grey-section">
        <div className="container">
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
                    setSteps(steps => {
                      const next = steps[ids[i + 1]]
                      return {
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
                      }
                    })
                  }}
                />
              )
            })}
          </div>
        </div>

        <div className="container bottom-container">
          <button className="reset-data" type="text" onClick={resetSteps}>
            Reset <TrashIcon />
          </button>
        </div>
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

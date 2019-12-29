import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Step from '../Step'
import TrashIcon from '../../assets/trash.svg'

const getStepsMap = data =>
  data.steps.edges.reduce(
    (steps, edge, i) => ({
      ...steps,
      expanded: i === 0,
      [edge.node.id]: edge.node
    }),
    {}
  )

const getStepsIds = data => data.steps.edges.map(edge => edge.node.id)

export default () => {
  if (typeof window === 'undefined') {
    return (
      <section className="grey-section">
        <div className="container"></div>
      </section>
    )
  }
  const data = useStaticQuery(stepsQuery)
  const cache = JSON.parse(window.localStorage.getItem('money-steps'))

  const [steps, setSteps] = useState(cache || getStepsMap(data))

  const resetSteps = () => setSteps(getStepsMap(data))

  useEffect(() => {
    window.localStorage.setItem('money-steps', JSON.stringify(steps))
  }, [steps])

  const ids = getStepsIds(data)

  return (
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
  )
}

export const stepsQuery = graphql`
  {
    steps: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___number] }
    ) {
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

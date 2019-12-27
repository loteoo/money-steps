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
      <div className="hero">
        <h1>Personal Fincance Guide</h1>
        <p>Basic financial advice everyone should follow.</p>
      </div>

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

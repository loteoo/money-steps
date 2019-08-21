/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const container = css`
  padding: 1rem;
  display: flex;
`

export default ({ i, step, setStep }) => (
  <div css={container} key={step.fileAbsolutePath}>
    <div css={css`width: 6rem; font-size: 3rem;`}>
      {'0' + (i + 1) + '.'}
    </div>
    <div css={css`width: calc(100% - 6rem);`}>
      <h2>{step.frontmatter.title}</h2>
      {/* {step.completed ? 'YES' : 'NO'}
      <button onClick={() => setStep({ ...step, completed: !step.completed })}>toggle</button> */}

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: step.html }}
      />
    </div>
  </div>
)

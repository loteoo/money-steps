/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const container = css`
  padding: 1rem;
`

export default ({ step, setStep }) => (
  <div css={container} key={step.fileAbsolutePath}>
    <h2>{step.frontmatter.title}</h2>
    <div className="content" dangerouslySetInnerHTML={{ __html: step.html }}></div>
    {step.opened ? 'YES' : 'NO'}
    <button onClick={() => setStep({ ...step, opened: !step.opened })}>toggle</button>
  </div>
)

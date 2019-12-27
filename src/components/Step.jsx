import React from 'react'

export default ({ i, step, setStep }) => (
  <div key={step.fileAbsolutePath}>
    <div>{'0' + (i + 1) + '.'}</div>
    <div>
      <h2>{step.frontmatter.title}</h2>

      <button onClick={() => setStep({ ...step, completed: !step.completed })}>
        {step.completed ? 'YES' : 'NO'}
      </button>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: step.html }}
      />
    </div>
  </div>
)

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import classNames from 'classnames'

import ExpandIcon from '../../assets/plus-square.svg'
import MinimizeIcon from '../../assets/minus-square.svg'
import CheckIcon from '../../assets/check-circle.svg'

import style from './step.module.css'

export default ({ step, setStep, enabled, markAsDone }) => {
  const containerClasses = classNames({
    [style.step]: true,
    [style.expanded]: step.expanded,
    [style.done]: step.done,
    [style.enabled]: enabled
  })
  return (
    <div key={step.id} className={containerClasses}>
      <div className={style.number}>{step.frontmatter.number}</div>
      <div className={style.card}>
        <div
          className={style.header}
          onClick={() => setStep({ ...step, expanded: !step.expanded })}
        >
          <h2 className={style.title}>{step.frontmatter.title}</h2>
          {!step.expanded && step.done && step.frontmatter.feedback && (
            <div className={style.feedback}>{step.frontmatter.feedback}</div>
          )}
          {step.expanded ? <MinimizeIcon /> : <ExpandIcon />}
        </div>

        {step.expanded && (
          <div className={style.content}>
            <div dangerouslySetInnerHTML={{ __html: step.html }} />
            {!step.done && (
              <button
                type="button"
                className={style.complete}
                onClick={markAsDone}
              >
                Mark as done
                <CheckIcon />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import classNames from 'classnames'

import UncheckedIcon from '../../assets/circle.svg'
import CheckedIcon from '../../assets/check-circle.svg'

import style from './step.module.css'

export default ({ step, setStep, enabled }) => {
  const containerClasses = classNames({
    [style.step]: true,
    [style.done]: step.done,
    [style.enabled]: enabled
  })
  return (
    <div
      key={step.id}
      className={containerClasses}
      onClick={() => setStep({ ...step, done: !step.done })}
    >
      <div className={style.number}>{step.frontmatter.number}</div>
      <div className={style.card}>
        <h2 className={style.title}>{step.frontmatter.title}</h2>

        {step.done ? <CheckedIcon /> : <UncheckedIcon />}

        {step.expanded && (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: step.html }}
          />
        )}
      </div>
    </div>
  )
}

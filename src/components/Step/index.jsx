import React from 'react'
import classNames from 'classnames'

import UncheckedIcon from '../../assets/circle.svg'
import CheckedIcon from '../../assets/check-circle.svg'

import style from './step.module.css'

export default ({ i, step, setStep }) => {
  const containerClasses = classNames({
    [style.step]: true,
    done: step.done
  })
  return (
    <div key={step.fileAbsolutePath} className={containerClasses}>
      <div className={style.number}>{i + 1}</div>
      <div className={style.card}>
        <h2 className={style.title}>{step.frontmatter.title}</h2>

        <button
          className={style.toggler}
          onClick={() => setStep({ ...step, done: !step.done })}
        >
          {step.done ? <CheckedIcon /> : <UncheckedIcon />}
        </button>

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

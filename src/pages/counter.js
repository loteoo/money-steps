import React from 'react'
import { GlobalState } from '../Layout'
import Seo from '../components/Seo'

export default () => (
  <GlobalState.Consumer>
    {({ state, setState }) => (
      <>
        <Seo title="Counter page" />
        <h1>{state.count}</h1>
        <button onClick={() => setState({ count: state.count - 1 })}>-</button>
        <button onClick={() => setState({ count: state.count + 1 })}>+</button>
      </>
    )}
  </GlobalState.Consumer>
)

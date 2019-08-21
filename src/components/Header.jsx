/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav a {
    margin-right: 1rem;
  }
`

export default () => (
  <header css={container}>
    <Link to="/">Logo</Link>
    <nav>
      <Link to="/example-page">Example page</Link>
    </nav>
  </header>
)

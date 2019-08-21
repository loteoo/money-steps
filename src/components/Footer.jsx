/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const container = css`
  margin: 3rem 0;
  a {
    margin-right: 1rem;
  }
`

export default () => (
  <footer css={container}>
    <a href="https://github.com/loteoo/gatsby-starter" target="_blank" rel="noopener noreferrer">Starter repository</a>
    <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>
  </footer>
)

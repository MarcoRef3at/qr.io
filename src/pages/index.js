import * as React from 'react'
import './styles.scss'

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <h1 className="headingStyles">
        Congratulations
        <br />
        <span className="headingAccentStyles">
          — you just made a Gatsby site! 🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

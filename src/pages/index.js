import * as React from 'react'
import '../styles.scss'
import QrData from '../components/qrData'
import QrPreview from '../components/qrData/qrPreview'

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <div className="mainElement">
        <QrData />
        <QrPreview />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

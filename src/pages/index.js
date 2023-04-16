import * as React from 'react'
import '../styles.scss'
import QrData from '../components/qrData'

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <div className="mainElement">
        <QrData />
        <div className="qrPreview">qrcode</div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

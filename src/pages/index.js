import * as React from 'react'
import QrData from '../components/qrData'
import QrPreview from '../components/qrData/qrPreview'
import { QrProvider } from '../contexts/qr.context'
import '../styles.scss'

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <div className="mainElement">
        <QrProvider>
          <QrData />
          <QrPreview />
        </QrProvider>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

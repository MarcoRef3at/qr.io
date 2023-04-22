import * as React from 'react'
import { useEffect, useState, useContext } from 'react'
import QrData from '../components/qrData'
import QrPreview from '../components/qrData/qrPreview'
import '../styles.scss'
import { QrContext, QrProvider } from '../contexts/qr.context'

const IndexPage = () => {
  const { QrValue } = useContext(QrContext)
  const [QrSpecs, setQrSpecs] = useState({
    bgColor: '#ffffff',
    fgColor: '#e3e3e3',
    size: 300,
  })
  useEffect(() => {
    if (QrValue && QrSpecs.fgColor == '#e3e3e3') {
      setQrSpecs({ ...QrSpecs, fgColor: '#000000' })
    }
  }, [QrValue])

  return (
    <main className="pageStyles">
      <div className="mainElement">
        <QrProvider>
          <QrData QrSpecs={QrSpecs} setQrSpecs={setQrSpecs} />
          <QrPreview QrSpecs={QrSpecs} />
        </QrProvider>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

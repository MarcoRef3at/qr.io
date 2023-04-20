import * as React from 'react'
import '../styles.scss'
import QrData from '../components/qrData'
import QrPreview from '../components/qrData/qrPreview'
import { useState } from 'react'

const IndexPage = () => {
  const [QrValue, setQrValue] = useState('')
  const [QrSpecs, setQrSpecs] = useState({
    bgColor: '#ffffff',
    fgColor: '#000000',
    size: 300,
  })

  return (
    <main className="pageStyles">
      <div className="mainElement">
        <QrData
          QrValue={QrValue}
          setQrValue={setQrValue}
          QrSpecs={QrSpecs}
          setQrSpecs={setQrSpecs}
        />
        <QrPreview QrValue={QrValue} QrSpecs={QrSpecs} />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

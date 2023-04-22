import * as React from 'react'
import { useEffect, useState } from 'react'
import QrData from '../components/qrData'
import QrPreview from '../components/qrData/qrPreview'
import '../styles.scss'

const IndexPage = () => {
  const [QrValue, setQrValue] = useState('')
  const [QrSpecs, setQrSpecs] = useState({
    bgColor: '#ffffff',
    fgColor: '#e3e3e3',
    size: 300,
  })
  useEffect(() => {
    console.log(QrValue)
    if (QrValue && QrSpecs.fgColor == '#e3e3e3') {
      setQrSpecs({ ...QrSpecs, fgColor: '#000000' })
    }
  }, [QrValue])

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

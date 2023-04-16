import React from 'react'
import '../../styles.scss'
import { QRCode } from 'react-qrcode-logo'

export default function QrPreview() {
  return (
    <div className="qrPreview">
      <QRCode value="" />
    </div>
  )
}

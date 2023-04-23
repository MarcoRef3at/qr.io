import html2canvas from 'html2canvas'
import React, { useContext } from 'react'
import { QRCode } from 'react-qrcode-logo'
import { QrContext } from '../../contexts/qr.context'
import '../../styles.scss'
import { BsDownload } from 'react-icons/Bs'
import QrButton from '../shared/button'

export default function QrPreview() {
  const handleDownload = () => {
    html2canvas(document.querySelector('#react-qrcode-logo')).then(function (
      canvas
    ) {
      const link = document.createElement('a')
      link.download = 'react-qrcode-logo.png'
      link.href = canvas.toDataURL()
      link.click()
    })
  }
  const { QrValue, QrSpecs } = useContext(QrContext)

  return (
    <div className="qrPreview">
      <div className="sticky-element">
        <QRCode
          id="qrCodeImage"
          value={QrValue}
          logoOnLoad={() => console.log('logo loaded')}
          {...{
            ...QrSpecs,
            eyeRadius: [
              // build eyeRadius manually
              {
                outer: [
                  QrSpecs.eyeradius_0_outer_0,
                  QrSpecs.eyeradius_0_outer_1,
                  QrSpecs.eyeradius_0_outer_2,
                  QrSpecs.eyeradius_0_outer_3,
                ],
                inner: [
                  QrSpecs.eyeradius_0_inner_0,
                  QrSpecs.eyeradius_0_inner_1,
                  QrSpecs.eyeradius_0_inner_2,
                  QrSpecs.eyeradius_0_inner_3,
                ],
              },
              {
                outer: [
                  QrSpecs.eyeradius_1_outer_0,
                  QrSpecs.eyeradius_1_outer_1,
                  QrSpecs.eyeradius_1_outer_2,
                  QrSpecs.eyeradius_1_outer_3,
                ],
                inner: [
                  QrSpecs.eyeradius_1_inner_0,
                  QrSpecs.eyeradius_1_inner_1,
                  QrSpecs.eyeradius_1_inner_2,
                  QrSpecs.eyeradius_1_inner_3,
                ],
              },
              {
                outer: [
                  QrSpecs.eyeradius_2_outer_0,
                  QrSpecs.eyeradius_2_outer_1,
                  QrSpecs.eyeradius_2_outer_2,
                  QrSpecs.eyeradius_2_outer_3,
                ],
                inner: [
                  QrSpecs.eyeradius_2_inner_0,
                  QrSpecs.eyeradius_2_inner_1,
                  QrSpecs.eyeradius_2_inner_2,
                  QrSpecs.eyeradius_2_inner_3,
                ],
              },
            ],
            eyeColor: [
              // build eyeColor manually
              {
                outer: QrSpecs.eyecolor_0_outer ?? QrSpecs.fgColor ?? '#000000',
                inner: QrSpecs.eyecolor_0_inner ?? QrSpecs.fgColor ?? '#000000',
              },
              {
                outer: QrSpecs.eyecolor_1_outer ?? QrSpecs.fgColor ?? '#000000',
                inner: QrSpecs.eyecolor_1_inner ?? QrSpecs.fgColor ?? '#000000',
              },
              {
                outer: QrSpecs.eyecolor_2_outer ?? QrSpecs.fgColor ?? '#000000',
                inner: QrSpecs.eyecolor_2_inner ?? QrSpecs.fgColor ?? '#000000',
              },
            ],
          }}
        />
        <QrButton className="downloadButton" onClick={handleDownload}>
          <BsDownload /> Download
        </QrButton>
      </div>
    </div>
  )
}

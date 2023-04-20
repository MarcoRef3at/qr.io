import React from 'react'
import '../../styles.scss'
import { QRCode } from 'react-qrcode-logo'

export default function QrPreview({ QrValue, QrSpecs }) {
  return (
    <div className="qrPreview">
      <QRCode
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
    </div>
  )
}

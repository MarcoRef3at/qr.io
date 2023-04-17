import React from 'react'
import '../../styles.scss'
import { QRCode } from 'react-qrcode-logo'

export default function QrPreview({ QrValue }) {
  return (
    <div className="qrPreview">
      <QRCode
        value={QrValue}
        logoOnLoad={() => console.log('logo loaded')}
        //   {...{
        //     ...state,
        //     eyeRadius: [
        //       // build eyeRadius manually
        //       {
        //         outer: [
        //           state.eyeradius_0_outer_0,
        //           state.eyeradius_0_outer_1,
        //           state.eyeradius_0_outer_2,
        //           state.eyeradius_0_outer_3
        //         ],
        //         inner: [
        //           state.eyeradius_0_inner_0,
        //           state.eyeradius_0_inner_1,
        //           state.eyeradius_0_inner_2,
        //           state.eyeradius_0_inner_3
        //         ]
        //       },
        //       {
        //         outer: [
        //           state.eyeradius_1_outer_0,
        //           state.eyeradius_1_outer_1,
        //           state.eyeradius_1_outer_2,
        //           state.eyeradius_1_outer_3
        //         ],
        //         inner: [
        //           state.eyeradius_1_inner_0,
        //           state.eyeradius_1_inner_1,
        //           state.eyeradius_1_inner_2,
        //           state.eyeradius_1_inner_3
        //         ]
        //       },
        //       {
        //         outer: [
        //           state.eyeradius_2_outer_0,
        //           state.eyeradius_2_outer_1,
        //           state.eyeradius_2_outer_2,
        //           state.eyeradius_2_outer_3
        //         ],
        //         inner: [
        //           state.eyeradius_2_inner_0,
        //           state.eyeradius_2_inner_1,
        //           state.eyeradius_2_inner_2,
        //           state.eyeradius_2_inner_3
        //         ]
        //       }
        //     ],
        //     eyeColor: [
        //       // build eyeColor manually
        //       {
        //         outer: state.eyecolor_0_outer ?? state.fgColor ?? '#000000',
        //         inner: state.eyecolor_0_inner ?? state.fgColor ?? '#000000'
        //       },
        //       {
        //         outer: state.eyecolor_1_outer ?? state.fgColor ?? '#000000',
        //         inner: state.eyecolor_1_inner ?? state.fgColor ?? '#000000'
        //       },
        //       {
        //         outer: state.eyecolor_2_outer ?? state.fgColor ?? '#000000',
        //         inner: state.eyecolor_2_inner ?? state.fgColor ?? '#000000'
        //       }
        //     ]
        //   }}
      />
    </div>
  )
}

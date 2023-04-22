import React, { useContext } from 'react'
import { Col, Row } from 'reactstrap'
import { QrContext } from '../../../../contexts/qr.context'
import ColorPicker from '../../../shared/colorPicker'

export default function Colors({ handleChange }) {
  const { QrSpecs } = useContext(QrContext)
  return (
    <div>
      <h3>Colors</h3>
      <Row>
        <Col>
          <ColorPicker
            name="bgColor"
            label="Background Color"
            defaultValue={QrSpecs.bgColor}
            handleChange={handleChange}
          />
        </Col>
        <Col>
          <ColorPicker
            name="fgColor"
            label="Dots Color"
            defaultValue={QrSpecs.fgColor}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <div style={{ padding: '15px' }}>
        <h5>eyeColor</h5>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p style={{ fontSize: 14 }}>Top left eye</p>
            <p style={{ fontSize: 12 }}>Outer</p>
            <ColorPicker
              name="eyecolor_0_outer"
              label="eyecolor_0_outer"
              type="color"
              defaultValue={QrSpecs.fgColor ?? '#000000'}
              handleChange={handleChange}
              hideLabel={true}
            />
            <p style={{ fontSize: 12 }}>Inner</p>
            <ColorPicker
              name="eyecolor_0_inner"
              label="eyecolor_0_inner"
              type="color"
              defaultValue={QrSpecs.fgColor ?? '#000000'}
              handleChange={handleChange}
              hideLabel={true}
            />
          </div>
          <div>
            <p style={{ fontSize: 14 }}>Top right eye</p>
            <p style={{ fontSize: 12 }}>Outer</p>
            <ColorPicker
              name="eyecolor_1_outer"
              label="eyecolor_1_outer"
              type="color"
              defaultValue={QrSpecs.fgColor ?? '#000000'}
              handleChange={handleChange}
              hideLabel={true}
            />
            <p style={{ fontSize: 12 }}>Inner</p>
            <ColorPicker
              name="eyecolor_1_inner"
              label="eyecolor_1_inner"
              type="color"
              defaultValue={QrSpecs.fgColor ?? '#000000'}
              handleChange={handleChange}
              hideLabel={true}
            />
          </div>
          <div>
            <p style={{ fontSize: 14 }}>Bottom left eye</p>
            <p style={{ fontSize: 12 }}>Outer</p>
            <ColorPicker
              name="eyecolor_2_outer"
              label="eyecolor_2_outer"
              type="color"
              defaultValue={QrSpecs.fgColor ?? '#000000'}
              handleChange={handleChange}
              hideLabel={true}
            />
            <p style={{ fontSize: 12 }}>Inner</p>
            <ColorPicker
              name="eyecolor_2_inner"
              label="eyecolor_2_inner"
              type="color"
              defaultValue={QrSpecs.fgColor ?? '#000000'}
              handleChange={handleChange}
              hideLabel={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

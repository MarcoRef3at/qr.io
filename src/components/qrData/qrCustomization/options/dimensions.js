import React from 'react'
import Slider from '../../../shared/slider'
export default function Dimensions({ QrSpecs, handleChange }) {
  const buildEyeRadiusInput = (id) => {
    return (
      <Slider
        name={id}
        label={id}
        type="range"
        handleChange={handleChange}
        min={0}
        max={50}
        hideLabel
        defaultValue={QrSpecs[id]}
      />
    )
  }
  return (
    <div>
      <h3>Dimensions</h3>
      <Slider
        name="size"
        label="QR Size"
        type="range"
        defaultValue={QrSpecs.size}
        handleChange={handleChange}
        min={250}
        max={500}
      />
      <Slider
        name="quietZone"
        label="Background Size"
        type="range"
        handleChange={handleChange}
        min={20}
        max={80}
      />

      <div style={{ padding: '15px' }}>
        <p>eyeRadius</p>
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
            {buildEyeRadiusInput('eyeradius_0_outer_0')}
            {buildEyeRadiusInput('eyeradius_0_outer_1')}
            {buildEyeRadiusInput('eyeradius_0_outer_2')}
            {buildEyeRadiusInput('eyeradius_0_outer_3')}
            <p style={{ fontSize: 12 }}>Inner</p>
            {buildEyeRadiusInput('eyeradius_0_inner_0')}
            {buildEyeRadiusInput('eyeradius_0_inner_1')}
            {buildEyeRadiusInput('eyeradius_0_inner_2')}
            {buildEyeRadiusInput('eyeradius_0_inner_3')}
          </div>
          <div>
            <p style={{ fontSize: 14 }}>Top right eye</p>
            <p style={{ fontSize: 12 }}>Outer</p>
            {buildEyeRadiusInput('eyeradius_1_outer_0')}
            {buildEyeRadiusInput('eyeradius_1_outer_1')}
            {buildEyeRadiusInput('eyeradius_1_outer_2')}
            {buildEyeRadiusInput('eyeradius_1_outer_3')}
            <p style={{ fontSize: 12 }}>Inner</p>
            {buildEyeRadiusInput('eyeradius_1_inner_0')}
            {buildEyeRadiusInput('eyeradius_1_inner_1')}
            {buildEyeRadiusInput('eyeradius_1_inner_2')}
            {buildEyeRadiusInput('eyeradius_1_inner_3')}
          </div>
          <div>
            <p style={{ fontSize: 14 }}>Bottom left eye</p>
            <p style={{ fontSize: 12 }}>Outer</p>
            {buildEyeRadiusInput('eyeradius_2_outer_0')}
            {buildEyeRadiusInput('eyeradius_2_outer_1')}
            {buildEyeRadiusInput('eyeradius_2_outer_2')}
            {buildEyeRadiusInput('eyeradius_2_outer_3')}
            <p style={{ fontSize: 12 }}>Inner</p>
            {buildEyeRadiusInput('eyeradius_2_inner_0')}
            {buildEyeRadiusInput('eyeradius_2_inner_1')}
            {buildEyeRadiusInput('eyeradius_2_inner_2')}
            {buildEyeRadiusInput('eyeradius_2_inner_3')}
          </div>
        </div>
      </div>
    </div>
  )
}
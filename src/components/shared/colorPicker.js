import React, { useState, useEffect } from 'react'
import TextInput from './textInput'
import '../../styles.scss'
export default function ColorPicker({
  name,
  handleChange,
  min,
  max,
  step,
  defaultValue,
  label,
  hideLabel,
  value,
}) {
  const [color, setColor] = useState(value) // Use 'value' as initial state for color input
  const [hexColor, setHexColor] = useState(value) // Use 'value' as initial state for hex input

  useEffect(() => {
    // Update color input state when 'value' prop changes
    setColor(value)
    setHexColor(value)
  }, [value])

  const handleColorChange = ({ target }) => {
    const newColor = target.value
    setColor(newColor)
    setHexColor(newColor)
    handleChange({ target })
  }

  const handleHexColorChange = ({ target }) => {
    const newHexColor = target.value
    setHexColor(newHexColor)
    setColor(newHexColor)
    handleChange({ target })
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}
    >
      <div style={{ display: 'flex' }}>
        <TextInput
          label={label}
          type="text"
          id={`${name}-hex`}
          name={`${name}`}
          onChange={handleHexColorChange}
          value={hexColor}
          defaultValue={defaultValue}
          style={{ marginLeft: '6px' }}
        />
        <TextInput
          type="color"
          className="colorPicker"
          style={{ padding: '2px' }}
          id={name}
          name={name}
          onChange={handleColorChange}
          min={min}
          max={max}
          step={step || 1}
          defaultValue={defaultValue}
          value={color}
        />
      </div>
    </div>
  )
}

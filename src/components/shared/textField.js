import React from 'react'
import { Input } from 'reactstrap'

export default function TextField({ handleChange, label, ...rest }) {
  return (
    <Input
      name="text"
      placeholder={label}
      type="textarea"
      onChange={handleChange}
      {...rest}
    />
  )
}

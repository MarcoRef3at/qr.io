import React from 'react'
import { Input } from 'reactstrap'

export default function TextField({ handleChange, ...rest }) {
  return <Input name="text" type="textarea" onChange={handleChange} {...rest} />
}

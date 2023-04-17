import { TextField } from '@mui/material'
import * as React from 'react'

const TextInput = ({ handleChange, ...rest }) => {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      onChange={handleChange}
      {...rest}
    />
  )
}
export default TextInput

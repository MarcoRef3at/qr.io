import { TextField } from '@mui/material'
import * as React from 'react'

const TextInput = ({ ...rest }) => {
  return <TextField id="standard-basic" variant="standard" {...rest} />
}
export default TextInput

import * as React from 'react'
import TextInput from './shared/textInput'
import { TextField } from '@mui/material'

const QrEmail = ({ title }) => {
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput label="Your Email Address" />
      <TextInput label="Subject Of Email" />
      <TextField
        id="filled-multiline-flexible"
        label="Message"
        multiline
        maxRows={4}
        variant="filled"
      />
    </div>
  )
}
export default QrEmail

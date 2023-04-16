import * as React from 'react'
import { TextField } from '@mui/material'
import TextInput from '../../shared/textInput'

const QrSMS = ({ title }) => {
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput label="Country Code" />
      <TextInput label="Phone Number" />
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
export default QrSMS

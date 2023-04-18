import * as React from 'react'
import TextInput from '../../shared/textInput'
import TextField from './../../shared/textField'

const QrSMS = ({ setQrValue }) => {
  const title = 'SMS Content'
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

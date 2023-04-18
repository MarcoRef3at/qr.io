import * as React from 'react'
import TextInput from '../../shared/textInput'
import TextField from './../../shared/textField'

const QrEmail = ({ setQrValue }) => {
  const title = 'E-mail Content'
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput label="Your Email Address" />
      <TextInput label="Subject Of Email" />
      <TextField
        id="filled-multiline-flexible"
        label="Message"
        maxRows={4}
        variant="filled"
      />
    </div>
  )
}
export default QrEmail

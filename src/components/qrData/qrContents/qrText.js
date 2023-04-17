import * as React from 'react'
import { TextField } from '@mui/material'

const QrText = ({ setQrValue }) => {
  const title = 'Text Content'
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextField
        id="filled-multiline-flexible"
        label="Write Your Text Here"
        multiline
        maxRows={4}
        variant="filled"
      />
    </div>
  )
}
export default QrText

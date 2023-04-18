import * as React from 'react'
import { useEffect, useState } from 'react'
import TextField from './../../shared/textField'

const QrText = ({ setQrValue }) => {
  const title = 'Text Content'
  const [textValue, setTextValue] = useState('')

  useEffect(() => {
    setQrValue(textValue)
  }, [url])

  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextField
        id="filled-multiline-flexible"
        label="Write Your Text Here"
        multiline
        maxRows={4}
        variant="filled"
        value={textValue}
        handleChange={({ target }) => {
          setTextValue(target.value)
        }}
      />
    </div>
  )
}
export default QrText

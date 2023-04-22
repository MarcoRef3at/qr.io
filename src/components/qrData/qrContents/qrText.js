import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { QrContext } from '../../../contexts/qr.context'
import TextField from './../../shared/textField'

const QrText = () => {
  const title = 'Text Content'
  const [textValue, setTextValue] = useState('')
  const { setQrValue } = useContext(QrContext)

  useEffect(() => {
    setQrValue(textValue)
  }, [textValue])

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

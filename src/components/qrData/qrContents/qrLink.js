import * as React from 'react'
import { useEffect, useState } from 'react'
import TextInput from '../../shared/textInput'

const QrLink = ({ setQrValue }) => {
  const [url, setUrl] = useState('https://')

  useEffect(() => {
    setQrValue(url)
  }, [url])

  const title = 'Submit URL'
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput
        label="URL"
        value={url}
        handleChange={({ target }) => {
          setUrl(target.value)
        }}
      />
    </div>
  )
}
export default QrLink

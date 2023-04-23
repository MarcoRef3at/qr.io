import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { QrContext } from '../../../contexts/qr.context'
import TextInput from '../../shared/textInput'

const QrLink = () => {
  const [url, setUrl] = useState('https://')
  const { setQrValue } = useContext(QrContext)
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

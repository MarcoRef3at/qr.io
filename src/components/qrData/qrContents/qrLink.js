import * as React from 'react'
import TextInput from '../../shared/textInput'

const QrLink = ({ setQrValue }) => {
  const title = 'Submit URL'
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput label="URL" />
    </div>
  )
}
export default QrLink

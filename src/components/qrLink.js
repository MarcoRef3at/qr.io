import * as React from 'react'
import TextInput from './shared/textInput'

const QrLink = ({ title }) => {
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput label="URL" />
    </div>
  )
}
export default QrLink

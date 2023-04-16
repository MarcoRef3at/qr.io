import * as React from 'react'
import TextInput from './shared/textInput'

const QrWifi = ({ title }) => {
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput label="Network name (SSID)" />
      <TextInput label="Network Type" />
      <TextInput label="Password" type="password" />
    </div>
  )
}
export default QrWifi

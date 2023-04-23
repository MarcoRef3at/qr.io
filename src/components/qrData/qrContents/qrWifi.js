import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { QrContext } from '../../../contexts/qr.context'
import TextInput from '../../shared/textInput'
import QrDropDown from './../../shared/dropDown'

const QrWifi = () => {
  const title = 'WI-FI'
  const networkTypes = ['WEP', 'WPA', 'WPA2']

  const { setQrValue } = useContext(QrContext)
  const [wifiName, setWifiName] = useState('')
  const [wifiPassword, setWifiPassword] = useState('')
  const [networkType, setNetworkType] = useState(networkTypes[0])
  const handleChange = ({ target }) => {
    if (target.name === 'wifiSSID') {
      setWifiName(target.value)
    } else if (target.name === 'wifiPassword') {
      setWifiPassword(target.value)
    } else if (target.name === 'networkType') {
      setNetworkType(target.value)
    }
  }
  useEffect(() => {
    const wifiCredentials = `WIFI:T:${networkTypes[networkType]};S:${wifiName};P:${wifiPassword};;`
    setQrValue(wifiCredentials)
  }, [wifiName, wifiPassword, networkType])

  return (
    <div>
      <div className="contentTitle">{title}</div>
      <QrDropDown
        name="networkType"
        label="Network Type"
        options={networkTypes}
        option={networkType}
        setOption={setNetworkType}
      />
      <TextInput
        name="wifiSSID"
        label="Network name (SSID)"
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="wifiPassword"
        label="Password"
        type="password"
        handleChange={handleChange}
      />
    </div>
  )
}
export default QrWifi

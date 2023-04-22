import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { QrContext } from '../../../contexts/qr.context'
import TextField from './../../shared/textField'

const QrSMS = () => {
  const title = 'SMS Content'
  const { setQrValue } = useContext(QrContext)

  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  useEffect(() => {
    const smsData = `SMSTO:+${phoneNumber}:${message};;`
    setQrValue(smsData)
  }, [phoneNumber, message])

  return (
    <div>
      <div className="contentTitle">{title}</div>
      <PhoneInput
        country={'us'}
        value={phoneNumber}
        onChange={(phone) => setPhoneNumber(phone)}
      />
      <TextField
        id="filled-multiline-flexible"
        label="Message"
        multiline
        maxRows={4}
        variant="filled"
        value={message}
        handleChange={({ target }) => {
          setMessage(target.value)
        }}
      />
    </div>
  )
}
export default QrSMS

import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { QrContext } from '../../../contexts/qr.context'
import TextInput from '../../shared/textInput'
import TextField from './../../shared/textField'

const QrEmail = () => {
  const title = 'E-mail Content'
  const { setQrValue } = useContext(QrContext)
  const [email, setEmail] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')

  useEffect(() => {
    const emailData = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
    setQrValue(emailData)
  }, [email, emailSubject, emailBody])

  return (
    <div>
      <div className="contentTitle">{title}</div>
      <TextInput
        label="Your Email Address"
        value={email}
        handleChange={({ target }) => {
          setEmail(target.value)
        }}
      />
      <TextInput
        label="Subject Of Email"
        value={emailSubject}
        handleChange={({ target }) => {
          setEmailSubject(target.value)
        }}
      />
      <TextField
        id="filled-multiline-flexible"
        label="Message"
        maxRows={4}
        variant="filled"
        value={emailBody}
        handleChange={({ target }) => {
          setEmailBody(target.value)
        }}
      />
    </div>
  )
}
export default QrEmail

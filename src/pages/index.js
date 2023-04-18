import * as React from 'react'
import '../styles.scss'
import QrData from '../components/qrData'
import QrPreview from '../components/qrData/qrPreview'
import { useState } from 'react'

const IndexPage = () => {
  const [QrValue, setQrValue] = useState('')

  const handleChange = ({ target }) => {
    if (target.type === 'file') {
      const reader = new FileReader()
      reader.onload = (event) => {
        const vcard = event.target?.result
        setState((prevState) => ({ ...prevState, value: vcard }))
      }
      reader.readAsText(target.files?.[0])
    } else if (target.name === 'PhoneNumber') {
      setState((prevState) => ({ ...prevState, PhoneNumber: target.value }))
      const smsData = `SMSTO:${target.value}:${state.Message};;`
      setState((prevState) => ({ ...prevState, value: smsData }))
    } else if (target.name === 'Message') {
      setState((prevState) => ({ ...prevState, Message: target.value }))
      const smsData = `SMSTO:${state.PhoneNumber}:${target.value};;`
      console.log('smsData:', smsData)
      setState((prevState) => ({ ...prevState, value: smsData }))
    } else if (target.name === 'Email') {
      setState((prevState) => ({ ...prevState, Email: target.value }))
      const emailData = `mailto:${target.value}?subject=${state.EmailSubject}&body=${state.EmailBody}`
      setState((prevState) => ({ ...prevState, value: emailData }))
    } else if (target.name === 'EmailSubject') {
      setState((prevState) => ({ ...prevState, EmailSubject: target.value }))
      const emailData = `mailto:${state.Email}?subject=${target.value}&body=${state.EmailBody}`
      setState((prevState) => ({ ...prevState, value: emailData }))
    } else if (target.name === 'EmailBody') {
      setState((prevState) => ({ ...prevState, EmailBody: target.value }))
      const emailData = `mailto:${state.Email}?subject=${state.EmailSubject}&body=${target.value}`
      console.log('emailData:', emailData)
      setState((prevState) => ({ ...prevState, value: emailData }))
    } else {
      setState((prevState) => ({ ...prevState, [target.name]: target.value }))
    }
  }
  return (
    <main className="pageStyles">
      <div className="mainElement">
        <QrData QrValue={QrValue} setQrValue={setQrValue} />
        <QrPreview QrValue={QrValue} />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

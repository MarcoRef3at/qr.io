import * as React from 'react'
import { useContext, useState } from 'react'
import { QrContext } from '../../../contexts/qr.context'
import TextInput from '../../shared/textInput'
import TextField from './../../shared/textField'

const QrVcard = () => {
  const { setQrValue } = useContext(QrContext)
  const title = 'Contact Information'
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [company, setCompany] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [fax, setFax] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postCode, setPostCode] = useState('')
  const [country, setCountry] = useState('')
  const handleChange = ({ target }) => {
    if (target.files?.length > 0) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const vcard = event.target?.result
        setQrValue(vcard)
      }
      reader.readAsText(target.files?.[0])
    } else {
      const vCardData = `BEGIN:VCARD
                        VERSION:3.0
                        N:${lastName};${firstName}
                        FN:${firstName} ${lastName}
                        TEL;TYPE=CELL:${phoneNumber}
                        EMAIL:${email}
                        ADR:${address};${city};${postCode};${country}
                        ORG:${company}
                        TITLE:${jobTitle}
                        URL:${website}
                        END:VCARD`

      setQrValue(vCardData)
    }
  }
  return (
    <div>
      <div className="contentTitle">{title}</div>
      <label htmlFor={name}>Upload vCard:</label>
      <input
        type="file"
        id={name}
        name={name}
        accept=".vcf"
        onChange={handleChange}
      />
      <div className="vcardForm">
        <TextInput
          label="First Name"
          value={firstName}
          handleChange={(e) => {
            setFirstName(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          handleChange={(e) => {
            setLastName(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Phone number"
          value={phoneNumber}
          handleChange={(e) => {
            setPhoneNumber(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Mobile"
          value={mobile}
          handleChange={(e) => {
            setMobile(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="E-mail"
          value={email}
          handleChange={(e) => {
            setEmail(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Website (URL)"
          value={website}
          handleChange={(e) => {
            setWebsite(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Company"
          value={company}
          handleChange={(e) => {
            setCompany(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Job title"
          value={jobTitle}
          handleChange={(e) => {
            setJobTitle(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Fax"
          value={fax}
          handleChange={(e) => {
            setFax(e.target.value)
            handleChange(e)
          }}
        />

        <TextInput
          label="City"
          value={city}
          handleChange={(e) => {
            setCity(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Post code"
          value={postCode}
          handleChange={(e) => {
            setPostCode(e.target.value)
            handleChange(e)
          }}
        />
        <TextInput
          label="Country"
          value={country}
          handleChange={(e) => {
            setCountry(e.target.value)
            handleChange(e)
          }}
        />

        <TextField
          id="filled-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
          variant="filled"
          value={address}
          handleChange={(e) => {
            setAddress(e.target.value)
            handleChange(e)
          }}
        />
      </div>
    </div>
  )
}
export default QrVcard

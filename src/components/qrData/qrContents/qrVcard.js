import * as React from 'react'
import TextInput from '../../shared/textInput'
import TextField from './../../shared/textField'

const QrVcard = ({ setQrValue }) => {
  const title = 'Contact Information'
  const handleChange = ({ target }) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const vcard = event.target?.result
      console.log('vcard', vcard)
      setQrValue(vcard)
    }
    reader.readAsText(target.files?.[0])
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
      <TextInput label="First Name" />
      <TextInput label="Last Name" />
      <TextInput label="Phone number" />
      <TextInput label="Mobile" />
      <TextInput label="E-mail" />
      <TextInput label="Website (URL)" />
      <TextInput label="Company" />
      <TextInput label="Job title" />
      <TextInput label="Fax" />
      <TextField
        id="filled-multiline-flexible"
        label="Address"
        multiline
        maxRows={4}
        variant="filled"
      />
      <TextInput label="City" />
      <TextInput label="Post code" />
      <TextInput label="Country" />
    </div>
  )
}
export default QrVcard

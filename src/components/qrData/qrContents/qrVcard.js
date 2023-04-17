import * as React from 'react'
import { TextField } from '@mui/material'
import TextInput from '../../shared/textInput'

const QrVcard = ({ setQrValue }) => {
  const title = 'Contact Information'
  return (
    <div>
      <div className="contentTitle">{title}</div>
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

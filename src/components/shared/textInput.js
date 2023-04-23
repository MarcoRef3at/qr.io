import * as React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const TextInput = ({ handleChange, label, ...rest }) => {
  return (
    <Form style={{ paddingRight: '1rem' }}>
      <FormGroup floating>
        <Input
          id="inputField"
          onChange={handleChange}
          placeholder={label}
          {...rest}
        />
        <Label for="inputField">{label}</Label>
      </FormGroup>
    </Form>
  )
}
export default TextInput

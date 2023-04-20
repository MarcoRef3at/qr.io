import * as React from 'react'
import { Input, Label } from 'reactstrap'
export const CheckboxField = ({ name, handleChange }) => {
  const handleCheckboxToggle = (e) => {
    const target = {
      name,
      value: e.target.checked,
    }
    handleChange({ target })
  }

  return (
    <div className="checkbox">
      <Input type="checkbox" name={name} onChange={handleCheckboxToggle} />
      <Label check htmlFor={name}>
        {name}
      </Label>
    </div>
  )
}

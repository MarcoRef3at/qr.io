import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
} from 'reactstrap'
import PropTypes from 'prop-types'

function QrDropDown({ direction, label, options, option, setOption, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <div className="d-flex p-5">
      <Label caret>{label}</Label>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>{options[option]}</DropdownToggle>
        <DropdownMenu {...args}>
          {options.map((opt, i) => {
            return (
              <DropdownItem key={i} onClick={() => setOption(i)}>
                {opt}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

QrDropDown.propTypes = {
  direction: PropTypes.string,
}

export default QrDropDown

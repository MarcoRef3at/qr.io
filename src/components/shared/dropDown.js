import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Col,
  Row,
} from 'reactstrap'
import PropTypes from 'prop-types'

function QrDropDown({ direction, label, options, option, setOption, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <div className="d-flex p-5">
      <Row style={{ textAlign: 'center' }}>
        <Label caret>{label}</Label>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle style={{ width: '100%', maxWidth: '8rem' }} caret>
            {options[option] || options[0]}
          </DropdownToggle>
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
      </Row>
    </div>
  )
}

QrDropDown.propTypes = {
  direction: PropTypes.string,
}

export default QrDropDown

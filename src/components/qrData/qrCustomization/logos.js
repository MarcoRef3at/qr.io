import React, { useEffect, useState } from 'react'
import { RiImageAddFill } from 'react-icons/ri'
import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import { CheckboxField } from '../../shared/checkbox'
import Slider from '../../shared/slider'
import QrDropDown from './../../shared/dropDown'
import StaticLogos from './staticLogos'

const logoPaddingStyles = ['square', 'circle']
export default function Logos({ handleChange }) {
  const [logoPadding, setLogoPadding] = useState(logoPaddingStyles[0])

  useEffect(() => {
    const target = {
      name: 'logoPaddingStyle',
      value: logoPaddingStyles[logoPadding],
    }
    handleChange({ target })
  }, [logoPadding])

  return (
    <AccordionItem>
      <AccordionHeader targetId="2">
        <RiImageAddFill />
        Logos
      </AccordionHeader>
      <AccordionBody accordionId="2" className="logo">
        <StaticLogos handleChange={handleChange} />
        <Slider
          name="logoWidth"
          label="logoWidth"
          handleChange={handleChange}
          min={20}
          max={500}
        />
        <Slider
          name="logoHeight"
          label="logoHeight"
          handleChange={handleChange}
          min={20}
          max={500}
        />
        <Slider
          name="logoOpacity"
          label="logoOpacity"
          handleChange={handleChange}
          min={0}
          max={1}
          step={0.1}
          defaultValue={1}
        />

        <CheckboxField
          name="removeQrCodeBehindLogo"
          handleChange={handleChange}
        />
        <Slider
          name="logoPadding"
          label="Logo Padding"
          handleChange={handleChange}
          min={0}
          max={20}
          step={1}
          defaultValue={0}
        />

        <QrDropDown
          label="Logo Padding Style"
          options={logoPaddingStyles}
          option={logoPadding}
          setOption={setLogoPadding}
        />
      </AccordionBody>
    </AccordionItem>
  )
}

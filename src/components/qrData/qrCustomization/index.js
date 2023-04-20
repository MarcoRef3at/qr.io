import React from 'react'
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from 'reactstrap'
import '../../../styles.scss'
import Options from './options/options'
import Logos from './logos'

export default function QrCustomization({ QrSpecs, setQrSpecs }) {
  const handleChange = ({ target }) => {
    console.log(target)
    setQrSpecs({ ...QrSpecs, [target.name]: target.value })
  }
  return (
    <UncontrolledAccordion defaultOpen="1">
      <Options accordionId={1} QrSpecs={QrSpecs} handleChange={handleChange} />
      <Logos accordionId={2} QrSpecs={QrSpecs} handleChange={handleChange} />
    </UncontrolledAccordion>
  )
}

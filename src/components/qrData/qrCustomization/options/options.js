import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import Colors from './colors'
import Dimensions from './dimensions'

export default function Options({ accordionId, QrSpecs, setQrSpecs }) {
  const handleChange = ({ target }) => {
    setQrSpecs({ ...QrSpecs, [target.name]: target.value })
  }
  return (
    <AccordionItem>
      <AccordionHeader targetId={accordionId}>Options</AccordionHeader>
      <AccordionBody accordionId={accordionId}>
        <Colors QrSpecs={QrSpecs} handleChange={handleChange} />
        <hr />
        <Dimensions QrSpecs={QrSpecs} handleChange={handleChange} />
      </AccordionBody>
    </AccordionItem>
  )
}

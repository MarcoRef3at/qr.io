import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import Colors from './colors'
import Dimensions from './dimensions'

export default function Options({ accordionId, handleChange }) {
  return (
    <AccordionItem>
      <AccordionHeader targetId={accordionId}>Options</AccordionHeader>
      <AccordionBody accordionId={accordionId}>
        <Colors handleChange={handleChange} />
        <hr />
        <Dimensions handleChange={handleChange} />
      </AccordionBody>
    </AccordionItem>
  )
}

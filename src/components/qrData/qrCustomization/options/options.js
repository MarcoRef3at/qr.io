import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import Colors from './colors'
import Dimensions from './dimensions'

export default function Options({ accordionId, handleChange }) {
  return (
    <AccordionItem>
      <AccordionHeader targetId={accordionId}>
        <RiSettings3Fill />
        Options
      </AccordionHeader>
      <AccordionBody accordionId={accordionId}>
        <Colors handleChange={handleChange} />
        <hr />
        <Dimensions handleChange={handleChange} />
      </AccordionBody>
    </AccordionItem>
  )
}

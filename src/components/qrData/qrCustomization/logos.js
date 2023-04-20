import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

export default function Logos() {
  return (
    <AccordionItem>
      <AccordionHeader targetId="2">Logos</AccordionHeader>
      <AccordionBody accordionId="2">
        <strong>This is the first item's accordion body.</strong>
        You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionBody>
    </AccordionItem>
  )
}

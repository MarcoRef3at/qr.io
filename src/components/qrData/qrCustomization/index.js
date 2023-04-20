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
  return (
    <UncontrolledAccordion defaultOpen="1">
      <Options accordionId={1} QrSpecs={QrSpecs} setQrSpecs={setQrSpecs} />
      <Logos accordionId={2} />
    </UncontrolledAccordion>
  )
}

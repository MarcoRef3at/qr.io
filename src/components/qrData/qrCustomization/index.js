import React, { useContext } from 'react'
import { UncontrolledAccordion } from 'reactstrap'
import { QrContext } from '../../../contexts/qr.context'
import '../../../styles.scss'
import Logos from './logos'
import Options from './options/options'

export default function QrCustomization() {
  const { setQrSpecs, QrSpecs } = useContext(QrContext)
  const handleChange = ({ target }) => {
    setQrSpecs({ ...QrSpecs, [target.name]: target.value })
  }
  return (
    <UncontrolledAccordion defaultOpen="0" className="accordions">
      <Options accordionId={'1'} open={['1']} handleChange={handleChange} />
      <Logos accordionId={'2'} open={['2']} handleChange={handleChange} />
    </UncontrolledAccordion>
  )
}

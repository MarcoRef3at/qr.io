import React from 'react'
import { Button } from 'reactstrap'

export default function QrButton({ children, ...rest }) {
  return (
    <Button color="primary" outline {...rest}>
      {children}
    </Button>
  )
}

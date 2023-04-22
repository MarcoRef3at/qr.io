import React, { createContext, useEffect, useState } from 'react'
const QrSpecsInitial = {
  bgColor: '#ffffff',
  fgColor: '#e3e3e3',
  size: 300,
}
export const QrContext = createContext({
  QrValue: null,
  setQrValue: null,
  QrSpecs: QrSpecsInitial,
  setQrSpecs: null,
})

export const QrProvider = ({ children }) => {
  const [QrValue, setQrValue] = useState('')
  const [QrSpecs, setQrSpecs] = useState(QrSpecsInitial)

  useEffect(() => {
    if (QrValue && QrSpecs.fgColor == '#e3e3e3') {
      setQrSpecs({ ...QrSpecs, fgColor: '#000000' })
    }
  }, [QrValue])
  const value = { QrValue, setQrValue, QrSpecs, setQrSpecs }
  return <QrContext.Provider value={value}>{children}</QrContext.Provider>
}

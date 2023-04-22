import React, { createContext, useState } from 'react'

export const QrContext = createContext({
  QrValue: null,
  setQrValue: null,
})

export const QrProvider = ({ children }) => {
  const [QrValue, setQrValue] = useState('')
  const value = { QrValue, setQrValue }
  return <QrContext.Provider value={value}>{children}</QrContext.Provider>
}

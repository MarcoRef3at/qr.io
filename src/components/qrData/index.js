import React from 'react'
import { useState } from 'react'
import QrLink from './qrContents/qrLink'
import QrEmail from './qrContents/qrEmail'
import QrText from './qrContents/qrText'
import QrSMS from './qrContents/qrSms'
import QrWifi from './qrContents/qrWifi'
import QrVcard from './qrContents/qrVcard'
import QrDataHeader from './qrDataHeader'
import QrCustomization from './qrCustomization'
import '../../styles.scss'

export default function QrData({ setQrValue, QrSpecs, setQrSpecs }) {
  const tabs = [
    {
      label: 'Link',
      icon: 'icon',
      content: <QrLink setQrValue={setQrValue} />,
    },
    {
      label: 'E-mail',
      icon: 'icon',
      content: <QrEmail setQrValue={setQrValue} />,
    },
    {
      label: 'Text',
      icon: 'icon',
      content: <QrText setQrValue={setQrValue} />,
    },
    {
      label: 'SMS',
      icon: 'icon',
      content: <QrSMS setQrValue={setQrValue} />,
    },
    {
      label: 'WI-FI',
      icon: 'icon',
      content: <QrWifi setQrValue={setQrValue} />,
    },
    {
      label: 'V-card',
      icon: 'icon',
      content: <QrVcard setQrValue={setQrValue} />,
    },
  ]
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="qrData">
      <QrDataHeader
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="qrDataContent">{tabs[selectedTab].content}</div>
      <div className="QrCustomization">
        <QrCustomization QrSpecs={QrSpecs} setQrSpecs={setQrSpecs} />
      </div>
    </div>
  )
}

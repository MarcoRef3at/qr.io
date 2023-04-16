import React from 'react'
import { useState } from 'react'
import QrLink from './qrContents/qrLink'
import QrEmail from './qrContents/qrEmail'
import QrText from './qrContents/qrText'
import QrSMS from './qrContents/qrSms'
import QrWifi from './qrContents/qrWifi'
import QrVcard from './qrContents/qrVcard'
import QrDataHeader from './qrDataHeader'

const tabs = [
  {
    label: 'Link',
    icon: 'icon',
    content: <QrLink title="Submit URL" />,
  },
  {
    label: 'E-mail',
    icon: 'icon',
    content: <QrEmail title="E-mail Content" />,
  },
  {
    label: 'Text',
    icon: 'icon',
    content: <QrText title="Text Content" />,
  },
  {
    label: 'SMS',
    icon: 'icon',
    content: <QrSMS title="SMS Content" />,
  },
  {
    label: 'WI-FI',
    icon: 'icon',
    content: <QrWifi title="WI-FI" />,
  },
  {
    label: 'V-card',
    icon: 'icon',
    content: <QrVcard title="Contact Information" />,
  },
]

export default function QrData() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="qrData">
      <QrDataHeader
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="qrDataContent">{tabs[selectedTab].content}</div>
      <div className="qrDataOptions">Options</div>
      <div className="qrDataLogo">Logo</div>
    </div>
  )
}

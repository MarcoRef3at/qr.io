import * as React from 'react'
import './styles.scss'
import Button from '@mui/material/Button'
import { useState } from 'react'
import QrLink from '../components/qrLink'
import QrEmail from '../components/qrEmail'
import QrText from '../components/qrText'
import QrSMS from '../components/qrSms'
import QrWifi from '../components/qrWifi'
import QrVcard from '../components/qrVcard'

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

const IndexPage = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <main className="pageStyles">
      <div className="mainElement">
        <div className="qrData">
          <div className="qrDataHeader">
            {tabs.map((tab, i) => {
              return (
                <Button
                  className="tabButton"
                  onClick={() => setSelectedTab(i)}
                  key={i}
                  variant={selectedTab == i ? 'contained' : 'text'}
                >
                  {tab.label}
                </Button>
              )
            })}
          </div>
          <div className="qrDataContent">{tabs[selectedTab].content}</div>
          <div className="qrDataOptions">Options</div>
          <div className="qrDataLogo">Logo</div>
        </div>
        <div className="qrPreview">qrcode</div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

import React, { useContext, useState } from 'react'
import { AiOutlineMail } from 'react-icons/Ai'
import { BsLink45Deg, BsWifi } from 'react-icons/bs'
import { CiTextAlignJustify } from 'react-icons/ci'
import { MdOutlineTextsms } from 'react-icons/md'
import { RiContactsBookLine } from 'react-icons/ri'
import { QrContext } from '../../contexts/qr.context'
import '../../styles.scss'
import QrEmail from './qrContents/qrEmail'
import QrLink from './qrContents/qrLink'
import QrSMS from './qrContents/qrSms'
import QrText from './qrContents/qrText'
import QrVcard from './qrContents/qrVcard'
import QrWifi from './qrContents/qrWifi'
import QrCustomization from './qrCustomization'
import QrDataHeader from './qrDataHeader'

export default function QrData() {
  const { QrSpecs, setQrSpecs } = useContext(QrContext)
  const tabs = [
    {
      label: 'Link',
      icon: <BsLink45Deg />,
      content: <QrLink />,
    },
    {
      label: 'E-mail',
      icon: <AiOutlineMail />,
      content: <QrEmail />,
    },
    {
      label: 'Text',
      icon: <CiTextAlignJustify />,
      content: <QrText />,
    },
    {
      label: 'SMS',
      icon: <MdOutlineTextsms />,
      content: <QrSMS />,
    },
    {
      label: 'WI-FI',
      icon: <BsWifi />,
      content: <QrWifi />,
    },
    {
      label: 'V-card',
      icon: <RiContactsBookLine />,
      content: <QrVcard />,
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

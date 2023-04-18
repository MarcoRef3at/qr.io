import React from 'react'
import '../../styles.scss'
import QrButton from './../shared/button'

export default function QrDataHeader({ tabs, selectedTab, setSelectedTab }) {
  return (
    <div className="qrDataHeader">
      {tabs.map((tab, i) => {
        return (
          <QrButton
            className="tabButton"
            onClick={() => setSelectedTab(i)}
            key={i}
            variant={selectedTab == i ? 'contained' : 'text'}
          >
            {tab.label}
          </QrButton>
        )
      })}
    </div>
  )
}
import React from 'react'
import Button from '@mui/material/Button'
import '../../styles.scss'

export default function QrDataHeader({ tabs, selectedTab, setSelectedTab }) {
  return (
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
  )
}

import React from 'react'

type Tab = {
  label: string
  isActive: boolean
}

type TabsProps = {
  tabs: Tab[]
}

const Tabs = ({ tabs }: TabsProps) => {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <TabItem key={t.label} {...t} />
      ))}
      <style jsx>{`
        .tabs {
          position: relative;
          display: grid;
          grid-auto-columns: max-content;
          grid-auto-flow: column;
          grid-gap: 1.6rem;
          overflow-x: hidden;
          box-shadow: inset 0 -1px 0 0 #d1d7dc;
        }
      `}</style>
    </div>
  )
}

const TabItem = ({ label, isActive }: Tab) => {
  return (
    <div className="tab-item">
      {label}
      <style jsx>{`
        .tab-item {
          height: 4.8rem;
          border-bottom: 2px solid transparent;
          border-bottom-color: ${isActive ? '#161616' : ''};
          font-size: 1.6rem;
          font-weight: 700;
          color: ${isActive ? '#161616' : '#6a6f73'};
        }
      `}</style>
    </div>
  )
}

export default Tabs

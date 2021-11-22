import React from 'react'
import styles from './Stats.module.scss'

type StatsProps = {
  stats: { figure: string; label: string }[]
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className={styles.stats} style={{ background: '#5624d0' }}>
      <div className={styles['stats__content']}>
        {stats.map(stat => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}

const Stat = ({ figure, label }: { figure: string; label: string }) => {
  return (
    <div className={styles.stat}>
      <div className={styles['stat__figure']}>{figure}</div>
      <p className={styles['stat__label']}>{label}</p>
    </div>
  )
}

export default Stats

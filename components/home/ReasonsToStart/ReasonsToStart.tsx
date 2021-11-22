import Card1, { Article } from '@/components/ui/cards/Card1/Card1'
import React from 'react'
import styles from './ReasonsToStart.module.scss'

type ReasonsToStartProps = {
  articles: Article[]
}

const ReasonsToStart = ({ articles }: ReasonsToStartProps) => {
  return (
    <div className={styles['reasons-to-start']}>
      <h2 className={styles['reasons-to-start__header']}>
        So many reasons to start
      </h2>

      <div className={styles['reasons-to-start__content']}>
        {articles.map(article => (
          <Card1 key={article.title} {...article} />
        ))}
      </div>
    </div>
  )
}

export default ReasonsToStart

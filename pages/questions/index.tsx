import { AppQuestion } from '@/components/ui'
import { questions } from 'data/questions'
import React from 'react'

const Questions = () => {
  return (
    <div>
      <AppQuestion question={questions[0]} />
    </div>
  )
}

export default Questions

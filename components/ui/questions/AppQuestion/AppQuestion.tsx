import React from 'react'
import { AppButton } from '../..'
import styles from './AppQuestion.module.scss'

type Option = {
  id: number
  content: string
}

type Question = {
  title: string
  text: string
  subtitle: string
  options: Option[]
}

type QuestionProps = {
  question: Question
}

const AppQuestion = ({ question }: QuestionProps) => {
  console.log(question)
  return (
    <div className={styles.question}>
      <QuestionHeader />
      <QuestionContent {...question} />
      <QuestionFooter />
    </div>
  )
}

const QuestionHeader = () => {
  return (
    <div className={styles['question-header']}>
      <div className={styles['question-header__wrapper']}>
        <div className={styles['question-header__wrapper--main']}>
          <h3 className={styles['brand']}>
            <i className="las la-university"></i>
            <span>Devlearn</span>
          </h3>
          <div className={styles['info']}>
            <div className={styles['info__text']}>Step 4 of 4</div>
          </div>
          <button
            type="button"
            data-purpose="exit-button"
            className={styles['exit']}
          >
            <span>Exit</span>
          </button>
        </div>
        <div className={styles['question-header__wrapper--progress']}>
          <div
            className="udlite-meter meter--meter--27-bB"
            aria-label="Step 4 of 4"
            data-purpose="meter"
            style={{ transform: 'scaleX(1)' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

const QuestionContent = ({ title, text, subtitle, options }: Question) => {
  return (
    <div className={styles['question-content']}>
      <div className="create-course-flow--takeover-content--2qDWB">
        <div>
          <h1
            className="udlite-heading-serif-xl create-course-flow--header-text--3e7a6"
            data-purpose="header-text"
          >
            {title}
          </h1>
          <p
            className={styles['question-content__text']}
            data-purpose="subhead-text"
          >
            {text}
          </p>
          <form className="create-course-flow--response-form--9mwoJ">
            <fieldset
              className="udlite-form-group-toggle-blocks udlite-form-group"
              style={{ border: 0 }}
            >
              <legend className={styles['question-content__subtitle']}>
                {subtitle}
              </legend>
              {options.map(option => (
                <QuestionOption key={option.id} {...option} />
              ))}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

const QuestionOption = ({ content }: Option) => {
  return (
    <label className={styles['question-option']} htmlFor="radio--10">
      <input
        name="survey-question-266"
        className=""
        id="radio--10"
        type="radio"
        value="1048"
      />
      <span className={styles['question-option__box']}></span>
      <div className={styles['question-option__border']}></div>
      <div className="">{content}</div>
      <style></style>
    </label>
  )
}

const QuestionFooter = ({ previous }: { previous?: boolean }) => {
  return (
    <div className={styles['question-footer']}>
      <AppButton label={'Previous'} outlined />
      <AppButton tabIndex={-1} label={'Continue'} />
    </div>
  )
}

export default AppQuestion

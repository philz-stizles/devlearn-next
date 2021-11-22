import React from 'react'

type ButtonGroupProps = {
  buttons: object[]
}

const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  return (
    <div className="button-group">
      <button
        type="button"
        className="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active"
      >
        month
      </button>
      <button
        type="button"
        className="fc-agendaWeek-button fc-button fc-state-default"
      >
        week
      </button>
      <button
        type="button"
        className="fc-agendaDay-button fc-button fc-state-default fc-corner-right"
      >
        day
      </button>
      <style jsx>{`
        .button-group {
        }
      `}</style>
    </div>
  )
}

export default ButtonGroup

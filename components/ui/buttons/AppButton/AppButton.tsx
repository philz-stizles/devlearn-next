import React, { ReactElement } from 'react'

type AppButtonProps = {
  tabIndex?: number
  type?: string
  size?: string
  color?: string
  label: string
  disabled?: boolean
  children?: ReactElement
  className?: string
  outlined?: boolean
  full?: boolean
  onClick?: () => void
}
const AppButton = ({
  type,
  label,
  full,
  outlined,
  onClick,
  disabled,
  size,
  color,
  className,
  tabIndex
}: AppButtonProps) => {
  type = type ? type : 'button'
  size = size ? size : 'medium'
  color = color ? color : '#161616'
  outlined = outlined ? true : false
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={['app-button', className ? className : ''].join(' ')}
      disabled={disabled}
    >
      {label}
      <style jsx>{`
        .app-button {
          width: ${full ? '100%' : 'unset'};
          font-size: ${size === 'small'
            ? '14px'
            : size === 'medium'
            ? '14px'
            : '16px'};
          line-height: ${size === 'small'
            ? '24px'
            : size === 'medium'
            ? '24px'
            : '26px'};
          padding: ${size === 'small'
            ? '7px 20px'
            : size === 'medium'
            ? '7px 20px'
            : '8px 25px'};
          display: inline-block;
          overflow: hidden;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          border: 1px solid transparent;
          border-color: ${outlined ? color : '#fff'};
          background: ${outlined ? '#fff' : color};
          outline: none;
          font-weight: 500;
          border-radius: 3px;
          color: ${outlined ? color : '#fff'};
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .app-button:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
      `}</style>
    </button>
  )
}

export default AppButton

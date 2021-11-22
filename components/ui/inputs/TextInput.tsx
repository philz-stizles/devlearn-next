import React from 'react'

type TextInputProps = {
  type?: string
  label?: string
  placeholder: string
  name?: string
  value: string
  required?: boolean
  onChange?: (e: any) => void
}

const TextInput = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  required,
}: TextInputProps) => {
  type = type ? type : 'text'
  return (
    <div className="text-input">
      {label && <label className="text-input__label">{label}</label>}
      <input
        type={type}
        className="text-input__input"
        placeholder={placeholder}
        name={name}
        value={value}
        spellCheck="false"
        data-ms-editor="true"
        onChange={onChange}
        required={required ? required : false}
      />
      <div className="text-input__msg">
        You can change or remove it at any time.
      </div>
      <style jsx>{`
        .text-input {
          margin-bottom: 20px;
        }

        .text-input__label {
          display: block;
          color: #373857;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .text-input__input {
          display: block;
          width: 100%;
          height: calc(1.5em + 1.5rem + 2px);
          padding: 0.437rem 0.75rem;
          font-weight: 400;
          line-height: 0.933;
          color: #373857;
          background-color: #fff;
          background-clip: padding-box;
          border: 2px solid #d9dfe7;
          border-radius: 6px;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .text-input__input:focus {
          opacity: 1;
          border-color: rgba(0, 95, 255, 1);
          box-shadow: 0 0 8px 0 rgb(0 95 255 / 32%);
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        .text-input__msg {
          font-size: 11px;
          color: rgba(55, 56, 87, 0.4);
          margin-top: 5px;
        }

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: rgba(55, 56, 87, 0.4);
          opacity: 0.4; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: rgba(55, 56, 87, 0.4);
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: rgba(55, 56, 87, 0.4);
        }
      `}</style>
    </div>
  )
}

export default TextInput

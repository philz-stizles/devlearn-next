/* eslint-disable @next/next/no-img-element */
import React from 'react'

type LogoProps = {
  name: string
}

const Logo = ({ name }: LogoProps) => {
  return (
    <div className="logo">
      <i className="las la-graduation-cap"></i>
      <h2>{name}</h2>
      <style>
        {`
          .logo {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            padding-right: 0.8rem;
            transform: translateY(-2px)
          }

           .logo i {
            font-size: 48px;
          }
        `}
      </style>
    </div>
  )
}

export default Logo

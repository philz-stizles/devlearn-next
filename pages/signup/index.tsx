import { NextPage } from 'next'
import React from 'react'
import SignupForm from '@/components/auth/SignupForm'
import { withPublic } from 'hoc'

const Login: NextPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__container">
        <SignupForm />
      </div>
      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-page__container {
          height: 100%;
          width: 48rem;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default withPublic(Login)

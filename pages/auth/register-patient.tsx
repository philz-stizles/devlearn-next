import { LoginForm } from '@/components/ui'
import RegisterForm from '@/components/auth/RegisterPatientForm'
import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import RegisterPatientForm from '@/components/auth/RegisterPatientForm'

const RegisterPage: NextPage = () => {
  return (
    <div className="register-page">
      <div className="container"></div>
      <div>
        <RegisterPatientForm />
      </div>
      <style jsx>{`
        .register-page {
          position: relative;
          display: grid;
          // grid-template-columns: repeat(1, minmax(0, 1fr));
          padding: 2.5rem 0;
          row-gap: 1.875rem;
          column-gap: 1.875rem;
          margin: 0 auto;
          max-width: 1170 px;
          min-height: 100vh;
          width: 100%;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          background-color: #e8f1ff;
        }

        .register-page__container {
          background-color: #fff;
          width: 1000px;
          min-height: 460px;
          margin: 120px auto 30px;
        }

        .col-lg-7 {
          background: #c6caed;
        }

        .login-page__row {
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default RegisterPage

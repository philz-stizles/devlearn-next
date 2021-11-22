import { LoginForm } from '@/components/ui'
import RegisterForm from '@/components/auth/RegisterPatientForm'
import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import RegisterPharmacyForm from '@/components/auth/RegisterPharmacyForm'

const RegisterPage: NextPage = () => {
  return (
    <div className="register-page">
      <div className="register-page__container">
        <div className="register-page__article">
          <div className="article">
            <h3 className="article__title">
              Get access to a world class health care platform &amp; save for
              the future!!
            </h3>
            <p className="heading__desc mt-30 mb-30">
              Mollys Club is a health care/services platform providing a full
              range of service in the medical sphere &amp; Mechanical
              Engineering worldwide for any type.
            </p>
            <p className="heading__desc mb-30">
              Yet those that embrace change are thriving, building bigger,
              better, faster, and stronger products than ever before. You are
              helping lead the charge; we can help you build on your past and
              prepare future changing faster than ever before, Amarou
              Constructions are evolving.
            </p>
            <ul className="list-items list-unstyled mb-40">
              <li>
                <i className="las la-check-circle"></i>
                <span>
                  Highly Professional Doctors &amp; Health Care Technicians
                </span>
              </li>
              <li>
                <i className="las la-check-circle"></i>
                <span>
                  Test center discounts, 100% Satisfaction GuaranteeAccurate
                  Testing Processes
                </span>
              </li>

              <li>
                <i className="las la-check-circle"></i>Unrivalled workmanship,
                Professional and Qualified
              </li>
            </ul>
          </div>
        </div>
        <RegisterPharmacyForm />
      </div>
      <style jsx>{`
        .register-page {
          background: #e8f1ff;
          min-height: 100vh;
        }

        .register-page__container {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          // grid-template-columns: repeat(1,minmax(0,1fr));
          padding-bottom: 2.5rem;
          padding-top: 2.5rem;
          row-gap: 1.875rem;
          column-gap: 1.875rem;
          background: #e8f1f;
          margin-left: auto;
          margin-right: auto;
          max-width: 1170px;
          position: relative;
          width: 100%;
        }

        .article {
          padding: 20px 40px 0 0;
        }

        .article__title {
          font-size: 40px;
          font-weight: 500;
          margin-bottom: 17px;
          text-transform: capitalize;
          line-height: 1.2;
        }
      `}</style>
    </div>
  )
}

export default RegisterPage

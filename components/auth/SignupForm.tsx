import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import { AppButton, Logo, TextInput } from '../ui'

const SignupForm = () => {
  const [signupForm, setRegisterForm] = useState({
    fullname: '',
    email: '',
    password: '',
    cpassword: ''
  })
  const router = useRouter()
  const { fullname, email, password, cpassword } = signupForm

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setRegisterForm({ ...signupForm, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    console.log(signupForm)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signupForm)
        }
      )

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      console.log(data.data)
      return router.push('/login')
    } catch (error: any | unknown) {
      console.log(error.message)
    }
  }

  return (
    <div className="login-form">
      <div className="row no-gutters">
        <div className="col-xl-12">
          <div className="auth-form">
            <div className="text-center mb-3">
              <Link href="/">
                <a>
                  <Logo name="Devlearn" />
                </a>
              </Link>
            </div>
            <h4 className="text-center mb-4 text-white">
              Sign in your account
            </h4>

            <form onSubmit={handleSubmit}>
              {/* <strong>Email</strong> */}
              <TextInput
                placeholder="Enter a valid fullname"
                name="fullname"
                value={fullname}
                onChange={handleInputChange}
              />
              <TextInput
                placeholder="Enter a valid email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <TextInput
                placeholder="Enter a valid password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <TextInput
                placeholder="Confirm password"
                name="cpassword"
                value={cpassword}
                onChange={handleInputChange}
              />
              <div className="form-row d-flex justify-content-between mt-4 mb-2">
                <div className="form-group"></div>
              </div>

              <div className="text-center">
                <AppButton type="submit" label={'Sign Me In'} full />
              </div>
            </form>
            <div className="new-account mt-3">
              <p className="text-white">
                {`Already have an account? `}
                <Link href="/login">
                  <a className="text-white">Sign up</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .login-form {
          box-shadow: 0 0 35px 0 rgb(154 161 171 / 15%);
          border-radius: 5px;
          color: #fff;
        }

        .auth-form {
          padding: 50px 50px;
          color: #161616;
        }

        .no-gutters {
          margin-right: 0;
          margin-left: 0;
        }
      `}</style>
      <style jsx global>{`
        .login-form label {
          color: #161616;
        }
      `}</style>
    </div>
  )
}

export default SignupForm

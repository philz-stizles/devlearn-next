import React from 'react'
import { getCookie } from '../utils/auth'
import axios from 'axios'
import { NextPage } from 'next'

const withPublic = (Page: NextPage) => {
  const WithAuthPublic = (props: any | unknown) => <Page {...props} />

  WithAuthPublic.getInitialProps = async (context: any) => {
    // Retrieve token from cookie for either client-side or server-side
    const token = getCookie('token', context.req) // getCookie() will check where the app is
    // running(client or server), and check the cookie
    console.log(token)

    let user = null

    if (token) {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/current-user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )

        user = response.data.data.user
      } catch (error: any | unknown) {
        console.log(error)
        if (error.response.status === 401 || error.response.status === 400) {
          user = null
        }
      }
    }

    if (user === null) {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        user,
        token
      }
    } else {
      context.res.writeHead(302, { Location: '/dashboard' })
      context.res.end()
    }
  }

  return WithAuthPublic
}

export default withPublic

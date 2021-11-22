import React from 'react'
import { getCookie } from '../utils/auth'
import axios from 'axios'
import { NextPage } from 'next'

const withUser = (Page: NextPage) => {
  const WithAuthUser = (props: any) => <Page {...props} />

  WithAuthUser.getInitialProps = async (context: any) => {
    const token = getCookie('token', context.req)
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
      context.res.writeHead(302, { Location: '/login' })
      context.res.end()
    } else {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        user,
        token
      }
    }
  }

  return WithAuthUser
}

export default withUser

import cookie from 'js-cookie'
import Router from 'next/router'

export const setCookie = (key: string, value: string) => {
  if (process.browser) {
    cookie.set(key, value, { expires: 1 })
  }
}

export const removeCookie = (key: string) => {
  if (process.browser) {
    cookie.remove(key)
  }
}

export const getCookieFromBrowser = (key: string) => {
  return cookie.get(key)
}

export const getCookieFromServer = (key: string, req: any) => {
  if (!req.headers.cookie) {
    return undefined
  }

  console.log(req.headers)

  const tokenKeyValue = req.headers.cookie
    .split(';')
    .find((c: string) => c.trim().startsWith(`${key}=`))
  if (!tokenKeyValue) {
    return undefined
  }

  return tokenKeyValue.split('=')[1]
}

export const getCookie = (key: string, req?: any) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req)
}

export const addToLocalStorage = (key: string, value: string) => {
  if (process.browser) {
    localStorage.setItem(key, value)
  }
}

export const removeFromLocalStorage = (key: string) => {
  if (process.browser) {
    localStorage.removeItem(key)
  }
}

export const authenticate = (data: any, cb: any) => {
  if (process.browser) {
    const { user, token } = data
    addToLocalStorage('user', JSON.stringify(user))
    setCookie('token', token)
    cb('admin')
  }
}

export const isAuthenticated = () => {
  if (process.browser) {
    const token = getCookie('token')
    if (token) {
      const user = localStorage.getItem('user')
      if (user) {
        return JSON.parse(user)
      } else {
        return false
      }
    } else {
      return false
    }
  }
}

export const logOut = () => {
  removeCookie('token')
  removeFromLocalStorage('loggedInUser')

  // Router.push('/login')
}

export const updateUserProfile = (user: any, cb: any) => {
  if (process.browser) {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      let auth = JSON.parse(loggedInUser)
      auth = user
      localStorage.setItem('loggedInUser', JSON.stringify(auth))
      cb()
    }
  }
}

/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Logo, AppButton } from '@/components//ui'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="navbar">
      <div className="wrapper-full navbar__content">
        <Logo name="Devlearn" />
        <Nav />
        <Search />
        <Cart />
        <AppButton
          label="Log in"
          outlined
          onClick={() => router.push('/login')}
        />
        <AppButton label="Sign up" onClick={() => router.push('signup')} />
      </div>
      <style jsx>{`
        .navbar {
          background-color: #fff;
          z-index: 1010;
          box-shadow: 0 3px 6px rgb(0 0 0 / 5%);
        }

        .navbar__content {
          display: flex;
          align-items: center;
          background: #fff;
          height: 7.2rem;
          padding: 0 2.4rem;
          position: relative;
          z-index: 1010;
        }
      `}</style>
      <style global jsx>{`
        .navbar__content button {
          margin-left: 0.8rem;
        }
      `}</style>
    </div>
  )
}

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link href="/">
          <a className="nav__link">Home</a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/">
          <a className="nav__link">Categories</a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/">
          <a className="nav__link">Business</a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/">
          <a className="nav__link">About</a>
        </Link>
      </li>
      <style jsx>{`
        .nav {
          display: flex;
          align-items: center;
        }

        .nav__link {
          padding: 0 1.2rem;
        }
      `}</style>
    </ul>
  )
}

const Search = () => {
  return (
    <div className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="search"
          placeholder="Search courses, instructors, materials etc"
        />
        <button className="search__button">
          <i className="las la-search"></i>
        </button>
      </form>
      <style jsx>{`
        .search {
          flex-grow: 1;
          height: 4.8rem;
          border: 1px solid #1c1d1f;
          border-radius: 3px;
          background-color: #f7f9fa;
          margin: 0 1.2rem;
        }

        .search__form {
          height: 100%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
        }

        .search__input {
          display: block;
          border: 0;
          border-radius: 0;
          flex: 1;
          padding: 0 1.6rem 0 0.4rem;
          background-color: transparent;
          height: 3.4rem;
        }

        .search__button {
          color: #5624d0;
          background-color: transparent;
          background-image: none;
          cursor: not-allowed;
          opacity: 0.5;
          width: 4.8rem;
          height: 4.8rem;
          position: relative;
          align-items: center;
          border: none;
          display: inline-flex;
          justify-content: center;
          user-select: none;
          vertical-align: bottom;
          white-space: nowrap;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02rem;
          font-size: 1.6rem;
        }

        .search__button i {
          color: #5624d0;
          font-weight: 700;
        }
      `}</style>
    </div>
  )
}

const Cart = () => {
  return (
    <div className="cart">
      <i className="las la-shopping-cart"></i>
      <style jsx>{`
        .cart {
          padding: 0 1.2rem;
          min-width: auto;
          margin: 1.2rem 0;
        }

        .cart i {
          font-size: 32px;
        }
      `}</style>
    </div>
  )
}

export default Navbar

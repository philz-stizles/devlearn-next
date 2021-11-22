import React from 'react'
import styles from './ContactBanner.module.scss'

const ContactBanner = () => {
  return (
    <div className="info-banner">
      <div
        className={['wrapper-fluid', styles['info-banner__wrapper']].join(' ')}
      >
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-7">
            <ContactList />
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5"></div>
        </div>
      </div>
      <style>{`
        .info-banner {
          display: block;
          background-color: #4949fd;
          color: #fff;
          padding: 12px 0;
          border-bottom: 1px solid #eaeaea;
        }
      `}</style>
    </div>
  )
}

const ContactList = () => {
  return (
    <ul className="contact-list">
      <li className="contact-list__item">
        <i className="las la-phone"></i>
        <span>Emergency Line: &nbsp;</span>
        <a href=""> (002) 01061245741</a>
      </li>
      <li className="contact-list__item">
        <i className="las la-business-time"></i>
        <span>Available: &nbsp;</span>
        <a href=""> Mon - Sun: 8:00 am - 8:00 am</a>
      </li>
      <style jsx>{`
        .contact-list {
          justify-content: flex-start;
          flex-wrap: wrap;
          display: flex;
          margin: 0;
          font-size: 12px;
        }

        .contact-list__item {
          position: relative;
          margin: 0 25px 0 0;
          display: flex;
          align-items: center;
        }

        .contact-list__item a:hover {
          color: #fff;
        }

        .contact-list__item i {
          font-size: 24px;
          margin-right: 8px;
        }
      `}</style>
    </ul>
  )
}

export default ContactBanner

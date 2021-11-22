import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={[styles['header__content'], ''].join(' ')}>
        <div className={styles['cta']}>
          <div className={styles['article']}>
            <h1 className={['u-margin-bxs', styles.article__heading].join(' ')}>
              <span className={styles.article__span}>Top Quality </span>
              <span className={styles.article__span}>Tech Courses, </span>
              <span className={styles.article__span}>
                Instructors &amp; Materials
              </span>
            </h1>
            <p className={['u-margin-bs', styles.article__paragraph].join(' ')}>
              Gain on-demand access to a wide range of affordable health
              services. Increase your lifespan while reducing your medical
              expenses on preventable illnesses
            </p>
          </div>
        </div>
      </div>

      {/*}
          <div className="row">
            <div className="col-lg-6 pe-5">
              <h1
                className={['u-margin-bxs', styles.article__heading].join(' ')}
              >
                <span className={styles.article__span}>On-Demand</span>
                <span className={styles.article__span}>
                  Preventive Healthcare,{' '}
                </span>
                <span className={styles.article__span}>
                  Doctors and Specialists
                </span>
              </h1>
              <p
                className={['u-margin-bs', styles.article__paragraph].join(' ')}
              >
                Gain on-demand access to a wide range of affordable health
                services. Increase your lifespan while reducing your medical
                expenses on preventable illnesses
              </p>

              <form action="#" className={styles.search}>
                <input
                  className={styles.search__input}
                  type="text"
                  placeholder="Search hotels"
                />
                <button className={styles.search__button}>
                  <i
                    className="icon-basic-magnifier"
                    style={{ fontSize: '2rem', color: 'green' }}
                  ></i>
                </button>
              </form>
            </div>

            <div className="col-lg-6">
              <Image
                src="/images/doctor_and_nurse.jpg"
                alt="Gymns"
                width={500}
                height={400}
                objectFit="cover"
              />
            </div>
          </div>
  */}
    </header>
  )
}

export default Header

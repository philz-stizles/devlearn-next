import React, { FC } from 'react'
import img from '../../../public/images/designs/Hinterrhein.svg'

type CtaProps = {}

const Cta: FC<CtaProps> = () => {
  // const img = require('../../../public/images/designs/Hinterrhein.svg')
  return (
    <section className="cta">
      <div className="cta__content">
        <div className="item">
          <div className="item__icon">
            <i className="las la-play"></i>
          </div>
          <div className="item__text">
            <p>Learn in-demand skills with over 183,000 video courses</p>
          </div>
        </div>
        <div className="item">
          <div className="item__icon">
            <i className="las la-star"></i>
          </div>
          <div className="item__text">
            <p>Choose courses taught by real-world experts</p>
          </div>
        </div>
        <div className="item">
          <div className="item__icon">
            <i className="las la-hourglass"></i>
          </div>

          <div className="item__text">
            <p>
              Learn at your own pace, with lifetime access on mobile and desktop
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta {
            width: 100%;
            background: #94c0d4;
            color: #fff;
            padding: 2.4rem 0;
          }

          .cta__content {
            padding-right: 2.4rem;
            padding-left: 2.4rem;
            display: flex;
            justify-content: space-between;
          }

          .item {
            display: flex;
            align-items: center;
          }

          .item:not(:first-child) {
            margin: 0 0 0 10rem;
          }

          .item__icon {
            background: #161616;
            height: 4rem;
            width: 4rem;
            margin-right: 1.6rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .item__text p {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.02rem;
          }
        `}
      </style>
    </section>
  )
}

export default Cta

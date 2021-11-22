import React from 'react'

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container px-5">
        <div className="row px-5">
          <div className="col-md-6">
            <Services />
          </div>
          <div className="col-md-6">
            <Article />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-us {
          }
        `}
      </style>
    </section>
  )
}

const Article = () => {
  return (
    <div className="article">
      <div className="article__title">
        <span className="sub-title">About Us</span>
        <h2 className="title">
          A Professional &amp; Reliable <br /> Health care Platform{' '}
        </h2>
      </div>
      <p className="article__text">
        Sedut perspiciatis unde omnis iste natus error sit voluptat em
        accusantium doloremq laudantium, totam raperiaeaque ipsa quae ab illo
        inventore veritatis et quasi
      </p>
      <p className="article__text">
        Doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore
        veritatis et quasi
      </p>
      <ul className="article__list">
        <li>
          {' '}
          <i className="las la-check"></i> Business &amp; Consulting Agency
        </li>
        <li>
          {' '}
          <i className="las la-check"></i> Awards Winning Business Comapny
        </li>
        <li>
          {' '}
          <i className="las la-check"></i> Awards Winning Business Comapny
        </li>
      </ul>
      <style>
        {`
          .article {
            padding-left: 80px;
          }

          .article__title {
            margin-bottom: 30px;
          }

          .article__title .sub-title {
            font-size: 20px;
            font-weight: 700;
            color: #4949fd;
            display: inline-block;
            position: relative;
            margin-bottom: 15px;
            padding-left: 45px;
          }

          .article__title .sub-title::before {
              position: absolute;
              left: 0;
              width: 30px;
              height: 3px;
              background-color: #4949fd;
              content: "";
              top: 50%;
              transform: translateY(-50%);
              display: block;
          }

          .article__title .title {
            font-size: 4.2rem;
            line-height: 1.1;
            font-weight: 700;
            text-transform: capitalize;
          }

          .article__text {
            margin-bottom: 20px;
          }
          
          .article__list {
            padding: 0;
            margin: 30px 0;
          }

          .article__list i {
            color: #4949fd;
            margin-right: 10px;
            position: relative;
            top: 2px;
          }
        `}
      </style>
    </div>
  )
}

const Services = () => {
  return (
    <div className="row no-gutters">
      <div className="features-column col-lg-4 col-md-6 col-sm-12">
        <div className="features-item text-center">
          <div className="features-icon">
            <i className="flaticon-manufacture-1"></i>
          </div>
          <div className="features-content">
            <h5>Great Support</h5>
          </div>
        </div>
      </div>
      <div className="features-column col-lg-4 col-md-6 col-sm-12">
        <div className="features-item text-center">
          <div className="features-icon">
            <i className="flaticon-manufacture"></i>
          </div>
          <div className="features-content">
            <h5>Unique Technology</h5>
          </div>
        </div>
      </div>
      <div className="features-column col-lg-4 col-md-6 col-sm-12">
        <div className="features-item text-center">
          <div className="features-icon">
            <i className="flaticon-worker-1"></i>
          </div>
          <div className="features-content">
            <h5>Awesome Team</h5>
          </div>
        </div>
      </div>
      <div className="features-column col-lg-4 col-md-6 col-sm-12">
        <div className="features-item text-center">
          <div className="features-icon">
            <i className="flaticon-natural-gas"></i>
          </div>
          <div className="features-content">
            <h5>Smart Work</h5>
          </div>
        </div>
      </div>
      <div className="features-column col-lg-4 col-md-6 col-sm-12">
        <div className="features-item text-center">
          <div className="features-icon text-center">
            <i className="flaticon-factory"></i>
          </div>
          <div className="features-content">
            <h5>Quality Materials</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

import React from 'react'

const Summary = () => {
  return (
    <section className="features-latout1 py-0">
      <div className="container">
        <div className="row mx-0">
          <div className="col-sm-12 col-md-12 col-lg-12 px-0 features-wrapper d-flex flex-wrap">
            <div className="feature-item">
              <div className="feature-item__content">
                <h4 className="feature-item__title">Powerful Strategy</h4>
                <p className="feature-item__desc">
                  Facilities meet high security requirements and are certified
                  to the highest local standards.
                </p>
                <a href="#" className="btn btn__link btn__secondary">
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item__content">
                <h4 className="feature-item__title">Award Winning</h4>
                <p className="feature-item__desc">
                  International supply chains involves of unknown risks and
                  challenging regulations.
                </p>
                <a href="#" className="btn btn__link btn__secondary">
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item__content">
                <h4 className="feature-item__title">Accurate Testing</h4>
                <p className="feature-item__desc">
                  Utilising latest processing solutions, and decades of work
                  experience.
                </p>
                <a href="#" className="btn btn__link btn__secondary">
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="feature-item bg-theme">
              <div
                className="slick-carousel m-slides-0 slick-initialized slick-slider slick-dotted"
                data-slick='{"slidesToShow": 1, "arrows": false, "dots": true, "autoPlay": true}'
              >
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: '1725px',
                      transform: 'translate3d(-345px, 0px, 0px)',
                    }}
                  >
                    <div
                      className="feature-item__content slick-slide slick-cloned"
                      data-slick-index="-1"
                      id=""
                      aria-hidden="true"
                      style={{ width: '345px' }}
                      tabIndex={-1}
                    >
                      <h4 className="feature-item__title color-white d-flex align-items-end mb-25">
                        <span className="counter">3,200</span>
                        <span>Employees</span>
                      </h4>
                      <p className="feature-item__desc color-white mb-0">
                        Complete control over products allows us to ensure our
                        customers receive the best quality prices and service.
                      </p>
                    </div>
                    <div
                      className="feature-item__content slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                      style={{ width: '345px' }}
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide10"
                      aria-describedby="slick-slide-control10"
                    >
                      <h4 className="feature-item__title color-white d-flex align-items-end mb-25">
                        <span className="counter">6,154</span>
                        <span>Projects</span>
                      </h4>
                      <p className="feature-item__desc color-white mb-0">
                        Complete control over products allows us to ensure our
                        customers receive the best quality prices and service.
                      </p>
                    </div>
                    <div
                      className="feature-item__content slick-slide"
                      data-slick-index="1"
                      aria-hidden="true"
                      style={{ width: '345px' }}
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide11"
                      aria-describedby="slick-slide-control11"
                    >
                      <h4 className="feature-item__title color-white d-flex align-items-end mb-25">
                        <span className="counter">3,200</span>
                        <span>Employees</span>
                      </h4>
                      <p className="feature-item__desc color-white mb-0">
                        Complete control over products allows us to ensure our
                        customers receive the best quality prices and service.
                      </p>
                    </div>
                    <div
                      className="feature-item__content slick-slide slick-cloned"
                      data-slick-index="2"
                      id=""
                      aria-hidden="true"
                      style={{ width: '345px' }}
                      tabIndex={-1}
                    >
                      <h4 className="feature-item__title color-white d-flex align-items-end mb-25">
                        <span className="counter">6,154</span>
                        <span>Projects</span>
                      </h4>
                      <p className="feature-item__desc color-white mb-0">
                        Complete control over products allows us to ensure our
                        customers receive the best quality prices and service.
                      </p>
                    </div>
                    <div
                      className="feature-item__content slick-slide slick-cloned"
                      data-slick-index="3"
                      id=""
                      aria-hidden="true"
                      style={{ width: '345px' }}
                      tabIndex={-1}
                    >
                      <h4 className="feature-item__title color-white d-flex align-items-end mb-25">
                        <span className="counter">3,200</span>
                        <span>Employees</span>
                      </h4>
                      <p className="feature-item__desc color-white mb-0">
                        Complete control over products allows us to ensure our
                        customers receive the best quality prices and service.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="slick-dots" style={{}} role="tablist">
                  <li className="slick-active" role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control10"
                      aria-controls="slick-slide10"
                      aria-label="1 of 2"
                      tabIndex={0}
                      aria-selected="true"
                    >
                      1
                    </button>
                  </li>
                  <li role="presentation" className="">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control11"
                      aria-controls="slick-slide11"
                      aria-label="2 of 2"
                      tabIndex={-1}
                    >
                      2
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Summary

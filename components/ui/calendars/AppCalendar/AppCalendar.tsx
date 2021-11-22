import React from 'react'
import { ButtonGroup } from '../..'
import styles from './AppCalendar.module.scss'

const AppCalendar = () => {
  return (
    <div className={styles['app-calendar']}>
      <div id="calendar-widget" className="fc fc-unthemed fc-ltr">
        <div className={styles['app-calendar__toolbar']}>
          <div className="fc-button-group">
            <button
              type="button"
              className="fc-prev-button fc-button fc-state-default fc-corner-left"
            >
              <i className="las la-angle-left"></i>
            </button>
            <button
              type="button"
              className="fc-next-button fc-button fc-state-default fc-corner-right"
            >
              <i className="las la-angle-right"></i>
            </button>
          </div>
          <div className={styles.center}>
            <h2>October 2021</h2>
          </div>

          <ButtonGroup buttons={[]} />
        </div>
        <div className={styles['app-calendar__view']}>
          <div className="fc-view fc-month-view fc-basic-view" style={{}}>
            <table>
              <thead className="fc-head">
                <tr>
                  <td className="fc-head-container fc-widget-header">
                    <div
                      className="fc-row fc-widget-header"
                      style={{
                        borderRightWidth: '1px',
                        marginRight: '-1.39996px',
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th className="fc-day-header fc-widget-header fc-sun">
                              <span>Sun</span>
                            </th>
                            <th className="fc-day-header fc-widget-header fc-mon">
                              <span>Mon</span>
                            </th>
                            <th className="fc-day-header fc-widget-header fc-tue">
                              <span>Tue</span>
                            </th>
                            <th className="fc-day-header fc-widget-header fc-wed">
                              <span>Wed</span>
                            </th>
                            <th className="fc-day-header fc-widget-header fc-thu">
                              <span>Thu</span>
                            </th>
                            <th className="fc-day-header fc-widget-header fc-fri">
                              <span>Fri</span>
                            </th>
                            <th className="fc-day-header fc-widget-header fc-sat">
                              <span>Sat</span>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody className="fc-body">
                <tr>
                  <td className="fc-widget-content">
                    <div
                      className="fc-scroller fc-day-grid-container"
                      style={{ overflow: 'hidden scroll', height: '362.8px' }}
                    >
                      <div className="fc-day-grid fc-unselectable">
                        <div
                          className="fc-row fc-week fc-widget-content"
                          style={{ height: '60px' }}
                        >
                          <div className="fc-bg">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                    data-date="2016-09-25"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                    data-date="2016-09-26"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                    data-date="2016-09-27"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                    data-date="2016-09-28"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-thu fc-other-month fc-past"
                                    data-date="2016-09-29"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-fri fc-other-month fc-past"
                                    data-date="2016-09-30"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-sat fc-past"
                                    data-date="2016-10-01"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="fc-content-skeleton">
                            <table>
                              <thead>
                                <tr>
                                  <td
                                    className="fc-day-top fc-sun fc-other-month fc-past"
                                    data-date="2016-09-25"
                                  >
                                    <span className="fc-day-number">25</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-mon fc-other-month fc-past"
                                    data-date="2016-09-26"
                                  >
                                    <span className="fc-day-number">26</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-tue fc-other-month fc-past"
                                    data-date="2016-09-27"
                                  >
                                    <span className="fc-day-number">27</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-wed fc-other-month fc-past"
                                    data-date="2016-09-28"
                                  >
                                    <span className="fc-day-number">28</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-thu fc-other-month fc-past"
                                    data-date="2016-09-29"
                                  >
                                    <span className="fc-day-number">29</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-fri fc-other-month fc-past"
                                    data-date="2016-09-30"
                                  >
                                    <span className="fc-day-number">30</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-sat fc-past"
                                    data-date="2016-10-01"
                                  >
                                    <span className="fc-day-number">1</span>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="fc-row fc-week fc-widget-content"
                          style={{ height: '60px' }}
                        >
                          <div className="fc-bg">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-day fc-widget-content fc-sun fc-past"
                                    data-date="2016-10-02"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-mon fc-past"
                                    data-date="2016-10-03"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-tue fc-past"
                                    data-date="2016-10-04"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-wed fc-past"
                                    data-date="2016-10-05"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-thu fc-past"
                                    data-date="2016-10-06"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-fri fc-past"
                                    data-date="2016-10-07"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-sat fc-past"
                                    data-date="2016-10-08"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="fc-content-skeleton">
                            <table>
                              <thead>
                                <tr>
                                  <td
                                    className="fc-day-top fc-sun fc-past"
                                    data-date="2016-10-02"
                                  >
                                    <span className="fc-day-number">2</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-mon fc-past"
                                    data-date="2016-10-03"
                                  >
                                    <span className="fc-day-number">3</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-tue fc-past"
                                    data-date="2016-10-04"
                                  >
                                    <span className="fc-day-number">4</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-wed fc-past"
                                    data-date="2016-10-05"
                                  >
                                    <span className="fc-day-number">5</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-thu fc-past"
                                    data-date="2016-10-06"
                                  >
                                    <span className="fc-day-number">6</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-fri fc-past"
                                    data-date="2016-10-07"
                                  >
                                    <span className="fc-day-number">7</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-sat fc-past"
                                    data-date="2016-10-08"
                                  >
                                    <span className="fc-day-number">8</span>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td className="fc-event-container">
                                    <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-warning fc-draggable fc-resizable">
                                      <div className="fc-content">
                                        {' '}
                                        <span className="fc-title">
                                          Events Group
                                        </span>
                                      </div>
                                      <div className="fc-resizer fc-end-resizer"></div>
                                    </a>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="fc-row fc-week fc-widget-content"
                          style={{ height: '60px' }}
                        >
                          <div className="fc-bg">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-day fc-widget-content fc-sun fc-past"
                                    data-date="2016-10-09"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-mon fc-past"
                                    data-date="2016-10-10"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-tue fc-past"
                                    data-date="2016-10-11"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-wed fc-past"
                                    data-date="2016-10-12"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-thu fc-past"
                                    data-date="2016-10-13"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-fri fc-past"
                                    data-date="2016-10-14"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-sat fc-past"
                                    data-date="2016-10-15"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="fc-content-skeleton">
                            <table>
                              <thead>
                                <tr>
                                  <td
                                    className="fc-day-top fc-sun fc-past"
                                    data-date="2016-10-09"
                                  >
                                    <span className="fc-day-number">9</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-mon fc-past"
                                    data-date="2016-10-10"
                                  >
                                    <span className="fc-day-number">10</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-tue fc-past"
                                    data-date="2016-10-11"
                                  >
                                    <span className="fc-day-number">11</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-wed fc-past"
                                    data-date="2016-10-12"
                                  >
                                    <span className="fc-day-number">12</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-thu fc-past"
                                    data-date="2016-10-13"
                                  >
                                    <span className="fc-day-number">13</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-fri fc-past"
                                    data-date="2016-10-14"
                                  >
                                    <span className="fc-day-number">14</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-sat fc-past"
                                    data-date="2016-10-15"
                                  >
                                    <span className="fc-day-number">15</span>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td className="fc-event-container">
                                    <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-success fc-draggable fc-resizable">
                                      <div className="fc-content">
                                        {' '}
                                        <span className="fc-title">
                                          Birthday
                                        </span>
                                      </div>
                                      <div className="fc-resizer fc-end-resizer"></div>
                                    </a>
                                  </td>
                                  <td></td>
                                  <td className="fc-event-container">
                                    <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-danger fc-draggable fc-resizable">
                                      <div className="fc-content">
                                        {' '}
                                        <span className="fc-title">
                                          Meeting
                                        </span>
                                      </div>
                                      <div className="fc-resizer fc-end-resizer"></div>
                                    </a>
                                  </td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="fc-row fc-week fc-widget-content"
                          style={{ height: '60px' }}
                        >
                          <div className="fc-bg">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-day fc-widget-content fc-sun fc-past"
                                    data-date="2016-10-16"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-mon fc-past"
                                    data-date="2016-10-17"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-tue fc-past"
                                    data-date="2016-10-18"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-wed fc-past"
                                    data-date="2016-10-19"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-thu fc-past"
                                    data-date="2016-10-20"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-fri fc-past"
                                    data-date="2016-10-21"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-sat fc-past"
                                    data-date="2016-10-22"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="fc-content-skeleton">
                            <table>
                              <thead>
                                <tr>
                                  <td
                                    className="fc-day-top fc-sun fc-past"
                                    data-date="2016-10-16"
                                  >
                                    <span className="fc-day-number">16</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-mon fc-past"
                                    data-date="2016-10-17"
                                  >
                                    <span className="fc-day-number">17</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-tue fc-past"
                                    data-date="2016-10-18"
                                  >
                                    <span className="fc-day-number">18</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-wed fc-past"
                                    data-date="2016-10-19"
                                  >
                                    <span className="fc-day-number">19</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-thu fc-past"
                                    data-date="2016-10-20"
                                  >
                                    <span className="fc-day-number">20</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-fri fc-past"
                                    data-date="2016-10-21"
                                  >
                                    <span className="fc-day-number">21</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-sat fc-past"
                                    data-date="2016-10-22"
                                  >
                                    <span className="fc-day-number">22</span>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-event-container"
                                    colSpan={2}
                                  >
                                    <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-primary fc-draggable fc-resizable">
                                      <div className="fc-content">
                                        {' '}
                                        <span className="fc-title">
                                          NinjaTeam Events
                                        </span>
                                      </div>
                                      <div className="fc-resizer fc-end-resizer"></div>
                                    </a>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="fc-row fc-week fc-widget-content"
                          style={{ height: '60px' }}
                        >
                          <div className="fc-bg">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-day fc-widget-content fc-sun fc-past"
                                    data-date="2016-10-23"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-mon fc-past"
                                    data-date="2016-10-24"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-tue fc-past"
                                    data-date="2016-10-25"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-wed fc-past"
                                    data-date="2016-10-26"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-thu fc-past"
                                    data-date="2016-10-27"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-fri fc-past"
                                    data-date="2016-10-28"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-sat fc-past"
                                    data-date="2016-10-29"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="fc-content-skeleton">
                            <table>
                              <thead>
                                <tr>
                                  <td
                                    className="fc-day-top fc-sun fc-past"
                                    data-date="2016-10-23"
                                  >
                                    <span className="fc-day-number">23</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-mon fc-past"
                                    data-date="2016-10-24"
                                  >
                                    <span className="fc-day-number">24</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-tue fc-past"
                                    data-date="2016-10-25"
                                  >
                                    <span className="fc-day-number">25</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-wed fc-past"
                                    data-date="2016-10-26"
                                  >
                                    <span className="fc-day-number">26</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-thu fc-past"
                                    data-date="2016-10-27"
                                  >
                                    <span className="fc-day-number">27</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-fri fc-past"
                                    data-date="2016-10-28"
                                  >
                                    <span className="fc-day-number">28</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-sat fc-past"
                                    data-date="2016-10-29"
                                  >
                                    <span className="fc-day-number">29</span>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="fc-event-container">
                                    <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-violet fc-draggable fc-resizable">
                                      <div className="fc-content">
                                        {' '}
                                        <span className="fc-title">Group</span>
                                      </div>
                                      <div className="fc-resizer fc-end-resizer"></div>
                                    </a>
                                  </td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="fc-row fc-week fc-widget-content"
                          style={{ height: '62px' }}
                        >
                          <div className="fc-bg">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-day fc-widget-content fc-sun fc-past"
                                    data-date="2016-10-30"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-mon fc-past"
                                    data-date="2016-10-31"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                    data-date="2016-11-01"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                    data-date="2016-11-02"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-thu fc-other-month fc-past"
                                    data-date="2016-11-03"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-fri fc-other-month fc-past"
                                    data-date="2016-11-04"
                                  ></td>
                                  <td
                                    className="fc-day fc-widget-content fc-sat fc-other-month fc-past"
                                    data-date="2016-11-05"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="fc-content-skeleton">
                            <table>
                              <thead>
                                <tr>
                                  <td
                                    className="fc-day-top fc-sun fc-past"
                                    data-date="2016-10-30"
                                  >
                                    <span className="fc-day-number">30</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-mon fc-past"
                                    data-date="2016-10-31"
                                  >
                                    <span className="fc-day-number">31</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-tue fc-other-month fc-past"
                                    data-date="2016-11-01"
                                  >
                                    <span className="fc-day-number">1</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-wed fc-other-month fc-past"
                                    data-date="2016-11-02"
                                  >
                                    <span className="fc-day-number">2</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-thu fc-other-month fc-past"
                                    data-date="2016-11-03"
                                  >
                                    <span className="fc-day-number">3</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-fri fc-other-month fc-past"
                                    data-date="2016-11-04"
                                  >
                                    <span className="fc-day-number">4</span>
                                  </td>
                                  <td
                                    className="fc-day-top fc-sat fc-other-month fc-past"
                                    data-date="2016-11-05"
                                  >
                                    <span className="fc-day-number">5</span>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppCalendar

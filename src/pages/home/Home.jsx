import React from 'react'
import './home.css'
import invest from './../../../public/invest.png'
import borrow from '../../../public/borrow.png'
import asset from './../../../public/asset.png'

const Home = () => {
  return (
    <>
      <section className='main'>
        <div className="mesh">
          <div className="main-text">
            <div className="heading-wrapper">
              <div className="line-wrapper">
                <span className="bold-text">Your Money is</span>
              </div>
              <div className="line-wrapper">
                <span className="bold-text">Where You Are</span>
              </div>
            </div>
            <div className='hero-subtext'>
              <p>Invest, borrow and manage your money all in one place.<br />Open account for free.</p>
            </div>

            <div className='hero-button-wrapper'>
              <button className='hero-btn'>
                <p>Apply Now</p>
              </button>
              <button className='hero-btn'>
                <p>Contact Us</p>
              </button>

            </div>
          </div>

          <div className="asset">
            <img src={asset} alt="" />
            <div className="arc"></div>
          </div>
        </div>

      </section>

      <div className='why'>
        <div className="why-left">
          <span className="heading-text">
            Why choose <span className='highlight'>1FI?</span>
          </span>
        </div>
        <div className='why-right'>
          <div className='invest'><img src={invest} alt="" /><p>INVEST in mutual funds that generate 15-30% annual <br /> returns in the long term</p></div>
          <div className='borrow'><img src={borrow} alt="" /><p>BORROW cash instantly whenever you need at just 8% <br />  per annum</p></div>
          <button> Learn more
            <svg className="arrow" strokeWidth="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
          </button>
        </div>
      </div>

    </>
  )
}

export default Home
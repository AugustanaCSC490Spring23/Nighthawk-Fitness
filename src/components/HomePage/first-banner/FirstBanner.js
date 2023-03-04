import React from 'react'
import './firstbanner.css'
import { Link } from 'react-router-dom'
import First from './first-img.jpg'

export default function FirstBanner() {
  return (
    <div>
        <section className='home-container banner'>
            <div className="banner-card">
                <div className="banner-content">
                    <h2>the body achieves what the mind believes.</h2>
                    <p>Want to train smarter? Track your progress,
                        and reach your goals with Nighthawk Fitness</p>
                    <div ><Link className="btn-first-banner" to='/signup'>Let's Get Started</Link></div>
                </div>
                <div className="banner-content">
                    <div className="first-banner-img">
                        <img src={First} alt="" />
                    </div>
                </div>
            </div>        
        </section>
    </div>
  )
}

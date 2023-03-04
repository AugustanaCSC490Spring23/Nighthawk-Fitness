import React from 'react'
import './secondbanner.css'
import { Link } from 'react-router-dom'
import First from './second-img.jpg'
import {AiFillCheckCircle} from 'react-icons/ai'

export default function SecondBanner() {
  return (
    <div>
        <section className='home-container banner'>
            <div className="banner-card second">
                <div className="banner-content left">
                    <div className="first-banner-img">
                        <img src={First} alt="" />
                    </div>
                    
                </div>
                <div className="banner-content right-banner">
                    <h2>stay on track</h2>
                    <p>Keep your fitness goals in sight with
                    our tools and tips. Stay motivated and on track 
                    with us</p>
                    <ul className="stay-on-track">
                        <li><AiFillCheckCircle className='check'/>Over ...+ workouts</li>
                        <li><AiFillCheckCircle className='check'/>Flexible workout planning</li>
                        <li><AiFillCheckCircle className='check'/>Log training</li>
                        <li><AiFillCheckCircle className='check'/>Track workout time</li>
                    </ul>
                </div>
            </div>        
        </section>
    </div>
  )
}

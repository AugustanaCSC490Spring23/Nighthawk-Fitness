import React from 'react'
import './footer.css'
import Fitness from '../../SignUp/logo-fitness.svg'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
        <div className="footer-container">
            <div className="footer-content">
              <div className="info-content">
                <div className="footer-logo">
                  <a href="#header"><img src={Fitness} alt="" /></a> 
                </div>
                <div className="contact-us">
                  <h1>Contact us</h1>
                  <p>We'd love to hear from you! If you have any questions, comments, 
                  or suggestions, please don't hesitate to reach out using the below.</p>
                  <form id='contact' className="contact-form">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email'/>
                    <textarea name="" id="" cols="69" rows="10"></textarea>
                    <button>Send</button>
                  </form>
                </div>
              </div>
              <div className="copyright-content">
                
                <small>Privacy Policy</small>
                <small>&copy; 2023 Nighthawk Fitness </small>
                <small>Term of use</small>
              </div>
            </div>
        </div>
    </div>
  )
}

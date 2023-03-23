import React from 'react'
import './footer.css'
import Fitness from '../../SignUp/logo-fitness.svg'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_isy7h6h', 'template_q36vpgf', form.current, 'TD7NnI1kph0WncjrT')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("message not sent");
      });
  };

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
                  <form ref={form} onSubmit={sendEmail} id='contact' className="contact-form">
                    <input name='name' type="text" placeholder='Name' />
                    <input name='email' type="email" placeholder='Email'/>
                    <textarea name='message' rows="10"></textarea>
                    <button type='submit'>Send</button>
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

export default Footer;
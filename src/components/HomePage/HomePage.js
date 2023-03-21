import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'
import Fitness from '../SignUp/logo-fitness.svg'
import FirstBanner from './first-banner/FirstBanner'
import SecondBanner from './second-banner/SecondBanner'
import Tools from './tools/Tools'
import Footer from './footer/Footer'

export default function HomePage() {

    function closeNavMain() {
        document.getElementById('homePageNav').classList.remove('open-main-nav')
        document.getElementById('homePageNav').classList.add('close-main-nav')
    }

    function openNavMain() {
        document.getElementById('homePageNav').classList.remove('close-main-nav')
        document.getElementById('homePageNav').classList.add('open-main-nav')

    }

  return (
    <div className='main-page'>
        <header>
            <div id='header' className="header">
                <div className="header-container">
                    <nav>
                        <div className="logo-main">
                            <img src={Fitness} alt="" />
                        </div>
                        <ul id='homePageNav' className="menu-item">
                            <div className="burger-close main" onClick={closeNavMain}>
                                <div></div>
                                <div className="sec"></div>
                                <div style={{marginBottom : '0'}}></div>
                            </div>
                            <li><Link to='/about'>About</Link></li>
                            <li><a className='contact' href="#contact">Contact</a></li>
                            <li><Link className='log' to='/login'>Login</Link></li>
                        </ul>
                        <div className="burger-dropdown main" onClick={openNavMain}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        <main>
            <FirstBanner />
            <SecondBanner />
            <Tools />
            <Footer />
        </main>
    </div>
  )
}

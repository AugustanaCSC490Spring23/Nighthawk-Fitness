import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'
import Fitness from '../SignUp/logo-fitness.svg'
import FirstBanner from './first-banner/FirstBanner'
import SecondBanner from './second-banner/SecondBanner'
import Tools from './tools/Tools'
import Footer from './footer/Footer'
import Zoom from 'react-reveal/Zoom'
import { Bounce } from 'react-reveal'

export default function HomePage() {
  return (
    <div className='main-page'>
        <header>
            <div className="header">
                <div className="header-container">
                    <nav>
                        <div className="logo-main">
                            <img src={Fitness} alt="" />
                        </div>
                        <ul className="menu-item">
                            <li><Link className='abt' to='/about'>About</Link></li>
                            <li>Contact</li>
                            <li><Link className='log' to='/login'>Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <main>
            <Zoom>
                <FirstBanner />
                <SecondBanner />
                <Tools />
            </Zoom>
            
            {/* <SecondBanner /> */}
            
            <Footer />
        </main>
    </div>
  )
}

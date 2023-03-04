import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'
import Fitness from '../SignUp/logo-fitness.svg'
import FirstBanner from './first-banner/FirstBanner'
import SecondBanner from './second-banner/SecondBanner'
import Tools from './tools/Tools'

export default function HomePage() {
  return (
    <div>
        <header>
            <div className="header">
                <div className="header-container">
                    <nav>
                        <div className="logo-main">
                            <img src={Fitness} alt="" />
                        </div>
                        <ul className="menu-item">
                            <li>About</li>
                            <li>Contact</li>
                            <li><Link className='log' to='/login'>Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <main>
            <FirstBanner />
            <SecondBanner />
            <Tools />
        </main>
    </div>
  )
}

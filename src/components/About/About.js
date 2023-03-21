import React from 'react'
import './About.css'
import Fitness from '../SignUp/logo-fitness.svg'
import {Link} from 'react-router-dom'
import Banner from './banner/Banner'
import Team from './team/Team'
import Zoom from 'react-reveal/Zoom'

export default function About() {
    return (
        <div className='main-page'>
            <header>
                <div className='header'>
                    <div className='header-container'>
                        <nav>
                            <div className='logo-main'>
                            <Link to="/"><img src={Fitness} alt="" /></Link>
                            </div>
                            <ul className="menu-item">
                                <li><Link className='abt' to='/about'>About</Link></li>
                                <li><Link className='con' to='/contact'>Contact</Link></li>
                                <li><Link className='log' to='/login'>Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <Zoom>
                    <Team />
                    <Banner />
                </Zoom>
            </main>
        </div>
    )
}
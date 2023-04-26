import React from 'react'
import Fitness from '../../SignUp/logo-fitness.svg'
import {Link} from 'react-router-dom'
import Banner from './banner/Banner'
import Team from './team/Team'

export default function About() {

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
                <div className='header'>
                    <div className='header-container'>
                        <nav>
                            <div className='logo-main'>
                                <Link to="/"><img src={Fitness} alt="" /></Link>
                            </div>
                            <ul id='homePageNav' className="menu-item">
                                <div className="burger-close main" onClick={closeNavMain}>
                                    <div></div>
                                    <div className="sec"></div>
                                    <div style={{marginBottom : '0'}}></div>
                                </div>
                                <li><Link className='home' to='/'>Home</Link></li>
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
                
                <Team />
                <Banner />
                
            </main>
        </div>
    )
}

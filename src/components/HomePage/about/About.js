import React from 'react'
import Fitness from '../../SignUp/logo-fitness.svg'
import {Link} from 'react-router-dom'
import Banner from './banner/Banner'
import Team from './team/Team'

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
                                <li><Link className='abt' to='/'>Home</Link></li>
                            
                                <li><Link className='log' to='/login'>Login</Link></li>
                            </ul>
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
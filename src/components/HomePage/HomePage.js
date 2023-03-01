import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <div className="header">
            <div className="header-container">
                <nav>
                    <div className="logo-main"></div>
                    <ul className="menu-item">
                        <li><Link to='/login'>Login</Link></li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

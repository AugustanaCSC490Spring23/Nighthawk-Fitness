import React from 'react'
import './Team.css'
import Minh from './Minh.jpeg'
import Ryan from './Ryan.jpeg'
import Donny from './Donny.jpeg'
import Ezana from './Ezana.jpeg'

export default function Team() {
    return (
        <div className='team-main-container'>
            <h1>Meet Our Team</h1>
            <div className='team-container'>
                <div class="team-member">
                    <img src={Minh} alt="" />
                    <h2>Minh</h2>
                </div>
                <div class="team-member">
                    <img src={Ryan} alt="" />
                    <h2>Ryan</h2>
                </div>
                <div class="team-member">
                    <img src={Donny} alt="" />
                    <h2>Donny</h2>
                </div>
                <div class="team-member">
                    <img src={Ezana} alt="" />
                    <h2>Ezana</h2>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './lobby.css'
export default function Lobby() {
  return (
    <div>
        <div className="container lobby">
            <h1 className='text1'>WELCOME TO</h1>
            <h1 className='text2'>NIGHTHAWK FITNESS</h1>
            <button><Link className='lobby-link' to='main'>Let's Go</Link></button>
        </div>
        
    </div>
  )
}

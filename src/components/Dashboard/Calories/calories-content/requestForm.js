import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdLock} from 'react-icons/io'
export default function RequestForm() {
  return (
    <div>
        <div className="request_form">
            <h4>Complete Your Profile To Unlock This Feature</h4>
            <IoMdLock className='lock-icon' />
        </div>
    </div>
  )
}

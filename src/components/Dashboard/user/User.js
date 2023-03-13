import React from 'react'
import './user.css'

export default function User({userData}) {
  return (
    <div className='user'>{userData.docID}</div>
  )
}

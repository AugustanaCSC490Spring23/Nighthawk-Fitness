import React from 'react'
import './user.css'
import { Avatar } from '@mui/material'

export default function User({userData}) {
  console.log(userData.information);
  
  return (
    
    <div className="user-container">
      <div className="user-avatar">
        <div className="user-img">
          <Avatar sx={{width: 150, height: 150}} src={userData.photoURL} />
        </div>
        <div className="user-name">
          {userData.name}
        </div>
      </div>
      <div className="user-info">
        <div className="user-data">
          <div className="title">Biometric Data</div>
          <div className="user-field">
            <div className="field-item">
              <div className="field-name">Age</div>
              <div className="field-data">{userData.information.age}</div>
            </div>

            <div className="field-item">
              <div className="field-name">Weight</div>
              <div className="field-data">{userData.information.weight}lbs</div>
            </div>

            <div className="field-item">
              <div className="field-name">Height</div>
              <div className="field-data">{userData.information.height}</div>
            </div>

            <div className="field-item">
              <div className="field-name">Gender</div>
              <div className="field-data">{userData.information.gender}</div>
            </div>
          </div>
        </div>

        <div className="user-contact">
          <div className="title">Contact</div>
          <div className="user-field">
            <div className="field-item">
              <div className="field-name">Email</div>
              <div className="field-data">{userData.email}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  )
}

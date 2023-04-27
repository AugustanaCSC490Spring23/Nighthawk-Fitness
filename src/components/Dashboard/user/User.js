import React, {useEffect} from 'react'
import './user.css'
import { Avatar } from '@mui/material'
import {GiPerson} from 'react-icons/gi'
import {IoMdArrowDropright} from 'react-icons/io'
import {FiTarget} from 'react-icons/fi'
import {AiFillSetting} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";
export default function User({userData, setUserData}) {

  useEffect(() => {
    if (!userData.nutrition && userData.dailyCal) {
      const currentDoc = doc(db, 'users', userData.docID);
      updateDoc(currentDoc, {
        nutrition: {
            cal: {
              remaining: Math.round(userData.dailyCal.maintain_cal * 100 / 100),
              consuming: 0
            },
            food_nutrition: {
              p: 0,
              c: 0,
              f: 0
            },
            food_array: {
              breakfast: [],
              lunch: [],
              dinner: [],
              snack: []
            }
        }
      })

      const updateData = {
        ...userData,
        nutrition: {
            cal: {
              remaining: Math.round(userData.dailyCal.maintain_cal * 100 / 100),
              consuming: 0
            },
            food_nutrition: {
              p: 0,
              c: 0,
              f: 0
            },
            food_array: {
              breakfast: [],
              lunch: [],
              dinner: [],
              snack: []
            }
        }
      };

      setUserData(updateData);
      localStorage.setItem('userData', JSON.stringify(updateData))
    }
  }, [userData])
  
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
          <div className="title">Fitness Profile</div>
          <div className="user-link">
            <div className="link-item">
              <div className="underline body"></div>
              <div className="link-title">  
                <div className="link-icon body">
                  <GiPerson />
                </div>
                
                <h4>My Body</h4>
              </div>
              <Link to='mybody'>
                <div className="link-btn">
                  <IoMdArrowDropright className='link-to-item' />
                </div>
              </Link>
              
            </div>
            <div className="link-item">
              <div className="underline goal"></div>
              <div className="link-title">
                <div className="link-icon goal">
                  <FiTarget />
                </div>
                
                <h4>Goal</h4>
              </div>
              <div className="link-btn">
                <IoMdArrowDropright className='link-to-item' />
              </div>
            </div>
            <div className="link-item">
              <div className="underline setting"></div>
              <div className="link-title">
                <div className="link-icon setting">
                  <AiFillSetting />
                </div>
                
                <h4>Setting</h4>
              </div>
              <div className="link-btn">
                <IoMdArrowDropright className='link-to-item' />
              </div>
            </div>
          </div>
          
        </div>

        <div className="user-contact">
          <div className="title">Contact</div>
          <div className="user-link">
            <div className="link-item mail">
              <div className="underline email"></div>
              <div className="link-title">  
                <div className="link-icon body">
                  <MdEmail />
                </div>
                
                <h4>Email</h4>
              </div>

              <div className="email">
                {userData.email}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
